wp.blocks.registerBlockType("ourblocktheme/header", {
  title: "Our Header",
  supports: {
    align: ["full"],
  },
  edit: function () {
    return wp.element.createElement(
      "div",
      { className: "our-placeholder-block" },
      "Header Placeholder"
    );
  },
  save: function () {
    return null;
  },
});
