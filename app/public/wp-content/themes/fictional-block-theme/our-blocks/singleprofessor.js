wp.blocks.registerBlockType("ourblocktheme/singleprofessor", {
  title: "Fictional University Single Professor",
  supports: {
    align: ["full"],
  },
  edit: function () {
    return wp.element.createElement(
      "div",
      { className: "our-placeholder-block" },
      "Single Professor Placeholder"
    );
  },
  save: function () {
    return null;
  },
});
