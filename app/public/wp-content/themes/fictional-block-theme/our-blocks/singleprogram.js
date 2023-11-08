wp.blocks.registerBlockType("ourblocktheme/singleprogram", {
  title: "Fictional University Single Program",
  supports: {
    align: ["full"],
  },
  edit: function () {
    return wp.element.createElement(
      "div",
      { className: "our-placeholder-block" },
      "Single Program Placeholder"
    );
  },
  save: function () {
    return null;
  },
});
