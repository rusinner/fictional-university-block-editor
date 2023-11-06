import { InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("ourblocktheme/banner", {
  title: "Banner",
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent() {
  const useMeLater = (
    <>
      <h1 className="headline headline--large">Welcome!</h1>
      <h2 className="headline headline--medium">
        We think you&rsquo;ll like it here.
      </h2>
      <h3 className="headline headline--small">
        Why don&rsquo;t you check out the <strong>major</strong> you&rsquo;re
        interested in?
      </h3>
      <a href="#" className="btn btn--large btn--blue">
        Find Your Major
      </a>
    </>
  );
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
        <InnerBlocks allowedBlocks={["ourblocktheme/genericheading"]} />
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
