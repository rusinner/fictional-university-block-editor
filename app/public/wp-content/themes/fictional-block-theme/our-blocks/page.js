wp.blocks.registerBlockType("ourblocktheme/page", {
  title: "Fictional University Single Page",
  supports: {
    align: ["full"],
  },
  edit: function () {
    return wp.element.createElement(
      "div",
      { className: "our-placeholder-block" },
      "Single Page Placeholder"
    );
  },
  save: function () {
    return null;
  },
});
