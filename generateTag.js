const formatAttribute = (attribute) => attribute.name + '="' + attribute.value + '"';

const formatAttributes = (attributes) => attributes.map(formatAttribute).join(' ');

const html = ([tag, attributes, ...content]) => {
  const newContent = content.map(elem => Array.isArray(elem) ? html(elem) : elem).join('');
  return '<' + tag + formatAttributes(attributes) + '>' + newContent + '</' + tag + '>';
};

const div = (content) => ['div', [], content];
const li = (content) => ['li', [], content];

exports.html = html;

// console.log(html(
//   [
//     'ul', [], ['li', [], ['div', [], 'this is child']]
//   ]
// ));

// const fruits = ['orange', 'banana'];
// const dom =
//   ['ul', {},
//     ...fruits.map(li)
//   ];
// html(dom);
