import { InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("ourblocktheme/banner", {
  title: "Banner",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent() {
  //this line is to fix relative path beacuse the bg image wasn't appearing before
  const { themeDirectory } = BlockThemeData;
  return (
    <div className="page-banner">
      <div
        className="page-banner__bg-image"
        style={{
          backgroundImage: `url('${themeDirectory}/images/library-hero.jpg')`,
        }}
      ></div>
      <div className="page-banner__content container t-center c-white">
        <InnerBlocks
          allowedBlocks={[
            "ourblocktheme/genericheading",
            "ourblocktheme/genericbutton",
          ]}
        />
      </div>
    </div>
  );
}

function SaveComponent() {
  const { themeDirectory } = BlockThemeData;

  return (
    <div className="page-banner">
      <div
        className="page-banner__bg-image"
        style={{
          backgroundImage: `url('${themeDirectory}/images/library-hero.jpg')`,
        }}
      ></div>
      <div className="page-banner__content container t-center c-white">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
