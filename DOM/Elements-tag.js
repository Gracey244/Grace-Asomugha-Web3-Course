<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    // Your code here.
  let result = [];

  function search(currentNode) {
    // Check if it's an element and matches the tag
    if (currentNode.nodeType === 1 && currentNode.nodeName.toLowerCase() === tagName.toLowerCase()) {
      result.push(currentNode);
    }

    // Recursively check children
    for (let child of currentNode.childNodes) {
      search(child);
    }
  }

  search(node);
  return result;
}

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>