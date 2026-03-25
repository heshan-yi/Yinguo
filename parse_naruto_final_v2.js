const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

// Read HTML file as buffer
const htmlPath = path.join(__dirname, 'assets/火影忍者社交拆解/腾讯星跃训练营_火影忍者手游_社交系统拆解.htm');
const buffer = fs.readFileSync(htmlPath);

// Convert from GBK to UTF-8
let html;
try {
  html = iconv.decode(buffer, 'gbk');
  console.log('Successfully converted from GBK to UTF-8');
} catch (e) {
  console.log('GBK conversion failed, trying UTF-8');
  html = buffer.toString('utf8');
}

console.log('HTML file size:', html.length);

// Clean and extract text from HTML content
function cleanText(content) {
  return content
    .replace(/<font[^>]*>/gi, '')
    .replace(/<\/font>/gi, '')
    .replace(/<span[^>]*>/gi, '')
    .replace(/<\/span>/gi, '')
    .replace(/<b[^>]*>/gi, '')
    .replace(/<\/b>/gi, '')
    .replace(/<i[^>]*>/gi, '')
    .replace(/<\/i>/gi, '')
    .replace(/<a[^>]*>/gi, '')
    .replace(/<\/a>/gi, '')
    .replace(/<img[^>]*>/gi, '')
    .replace(/<o:p>/gi, '')
    .replace(/<\/o:p>/gi, '')
    .replace(/<!\[if [^\]]*\]>/gi, '')
    .replace(/<!\[endif\]>/gi, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&quot;/gi, '"')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&amp;/gi, '&')
    .replace(/&#(\d+);/gi, (m, d) => String.fromCharCode(d))
    .replace(/&#x([0-9a-fA-F]+);/gi, (m, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\s+/gi, ' ')
    .trim();
}

// Extract all <p> tags
const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
const paragraphs = [];
let match;
let pIndex = 0;

while ((match = pRegex.exec(html)) !== null) {
  const fullTag = match[0];
  const content = match[1];
  const text = cleanText(content);

  if (text && text.length > 0) {
    paragraphs.push({
      index: pIndex++,
      text: text,
      html: content,
      fullTag: fullTag,
      position: match.index
    });
  }
}

console.log('Total paragraphs extracted:', paragraphs.length);

// Analyze headings
console.log('\n=== HEADING ANALYSIS ===\n');

// Check for main headings by looking for Chinese numerals
const mainHeadingMatches = [];
paragraphs.forEach((p, idx) => {
  const mainHeadingMatch = p.text.match(/^([一二三四五六七八九十]+、[^\s]+)/);
  if (mainHeadingMatch) {
    mainHeadingMatches.push({ paragraph: p, title: mainHeadingMatch[1], index: idx, position: p.position });
  }
});

console.log(`Level 1 Headings (一、二、三、...): ${mainHeadingMatches.length}`);

// Level 2 headings: "1. xxx" "2. xxx" but NOT "1.1 xxx"
const level2Matches = [];
paragraphs.forEach((p, idx) => {
  const level2Match = p.text.match(/^(\d+[、.]\s*[^\d]+)/);
  if (level2Match && !p.text.match(/^\d+\.\d+/)) {
    level2Matches.push({ paragraph: p, title: level2Match[1].trim(), index: idx, position: p.position });
  }
});

console.log(`Level 2 Headings (1. 2. 3. ...): ${level2Matches.length}`);

// Level 3 headings: "1.1 xxx" "1.2 xxx"
const level3Matches = [];
paragraphs.forEach((p, idx) => {
  const level3Match = p.text.match(/^(\d+\.\d+\s+.+)/);
  if (level3Match) {
    level3Matches.push({ paragraph: p, title: level3Match[1].trim(), index: idx, position: p.position });
  }
});

console.log(`Level 3 Headings (1.1 1.2 1.3 ...): ${level3Matches.length}`);

// Level 4 headings: Check for "1.4.1" style
const level4Matches = [];
paragraphs.forEach((p, idx) => {
  const level4Match = p.text.match(/^(\d+\.\d+\.\d+\s+.+)/);
  if (level4Match) {
    level4Matches.push({ paragraph: p, title: level4Match[1].trim(), index: idx, position: p.position });
  }
});

console.log(`Level 4 Headings (1.4.1 1.4.2 ...): ${level4Matches.length}`);

// Extract images
console.log('\n=== IMAGE EXTRACTION ===\n');
const imgRegex = /<img[^>]+src="([^"]+)"/gi;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  const imgPath = match[1];
  const filename = imgPath.split('/').pop();
  images.push({
    originalPath: imgPath,
    filename: filename,
    position: match.index,
    webPath: `assets/火影忍者社交拆解/腾讯星跃训练营_火影忍者手游_社交系统拆解.files/${filename}`
  });
}
console.log(`Total images: ${images.length}`);

// Build hierarchical structure
console.log('\n=== BUILDING HIERARCHICAL STRUCTURE ===\n');

let sectionIdCounter = 1;

// Create sections from all matches in order
const allHeadings = [
  ...mainHeadingMatches.map(m => ({ ...m, level: 1 })),
  ...level2Matches.map(m => ({ ...m, level: 2 })),
  ...level3Matches.map(m => ({ ...m, level: 3 })),
  ...level4Matches.map(m => ({ ...m, level: 4 }))
];

// Sort by position in document
allHeadings.sort((a, b) => a.position - b.position);

// Build tree structure
function buildTree(headings) {
  const root = { level: 0, subsections: [] };
  const stack = [root];

  headings.forEach(heading => {
    const section = {
      id: `section_${sectionIdCounter++}`,
      level: heading.level,
      title: heading.paragraph.text,
      content: [],
      images: [],
      subsections: [],
      position: heading.position
    };

    // Find the correct parent by level
    while (stack.length > 1 && stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }

    stack[stack.length - 1].subsections.push(section);
    stack.push(section);
  });

  return root;
}

const root = buildTree(allHeadings);

// Fill content between headings
function fillContent(section, startPos, endPos) {
  // Find paragraphs between startPos and endPos that are not headings
  const headingPositions = new Set(allHeadings.map(h => h.position));

  const contentParagraphs = paragraphs.filter(p =>
    p.position > startPos &&
    p.position < endPos &&
    !headingPositions.has(p.position)
  );

  contentParagraphs.forEach(p => {
    const text = p.text.trim();
    if (text && text.length > 0) {
      section.content.push(text);
    }
  });

  // Find images in this section
  const sectionImages = images.filter(img =>
    img.position > startPos && img.position < endPos
  );

  sectionImages.forEach(img => {
    section.images.push(img.webPath);
  });
}

// Recursively fill content for all sections
function fillAllContent(section, startPos, endPos) {
  // Fill content for this section
  if (section.subsections.length > 0) {
    let currentPos = startPos;

    section.subsections.forEach((sub, idx) => {
      // Fill content before this subsection
      fillContent(sub, currentPos, sub.position);

      // Determine end position for this subsection
      const nextPos = idx < section.subsections.length - 1
        ? section.subsections[idx + 1].position
        : endPos;

      // Recursively fill subsection content
      fillAllContent(sub, sub.position, nextPos);

      currentPos = sub.position;
    });
  } else {
    // No subsections, fill all content until endPos
    fillContent(section, startPos, endPos);
  }
}

// Fill content for all top-level sections
let currentPos = 0;
root.subsections.forEach((section, idx) => {
  const endPos = idx < root.subsections.length - 1
    ? root.subsections[idx + 1].position
    : html.length;

  fillContent(section, currentPos, section.position);
  fillAllContent(section, section.position, endPos);

  currentPos = section.position;
});

// Output structure summary
console.log(`\nTop-level sections: ${root.subsections.length}`);
root.subsections.forEach((s1, i) => {
  const totalContent = countContent(s1);
  console.log(`${i + 1}. ${s1.title} (Level ${s1.level})`);
  console.log(`   Content: ${s1.content.length}, Images: ${s1.images.length}, Subsections: ${s1.subsections.length}, Total content items: ${totalContent}`);
});

function countContent(section) {
  let count = section.content.length;
  section.subsections.forEach(sub => {
    count += countContent(sub);
  });
  return count;
}

// Generate output file
const outputData = {
  meta: {
    title: '火影忍者手游社交系统拆解',
    source: '腾讯星跃训练营',
    generatedAt: new Date().toISOString(),
    totalSections: root.subsections.length,
    totalImages: images.length
  },
  sections: root.subsections
};

const outputPath = path.join(__dirname, 'js/data/naruto-doc-fixed.js');
fs.writeFileSync(outputPath, `const NARUTO_DOC_FIXED = ${JSON.stringify(outputData, null, 2)};`, 'utf8');
console.log(`\nOutput written to: ${outputPath}`);

// Also write a readable version
const readablePath = path.join(__dirname, 'js/data/naruto-doc-fixed.json');
fs.writeFileSync(readablePath, JSON.stringify(outputData, null, 2), 'utf8');
console.log(`Readable JSON written to: ${readablePath}`);
