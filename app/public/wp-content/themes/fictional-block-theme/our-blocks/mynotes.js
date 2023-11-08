wp.blocks.registerBlockType("ourblocktheme/mynotes", {
  title: "Fictional University My Notes",
  supports: {
    align: ["full"],
  },
  edit: function () {
    return wp.element.createElement(
      "div",
      { className: "our-placeholder-block" },
      "My Notes Placeholder"
    );
  },
  save: function () {
    return null;
  },
});
