import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";

registerBlockType("ourblocktheme/slide", {
  title: "Slide",
  supports: {
    align: ["full"],
  },
  attributes: {
    themeimage: { type: "string" },
    align: { type: "string", default: "full" },
    imgID: { type: "number" },
    //fallback image is from the object created in functions php inside onInit function
    imgURL: { type: "string", default: banner.fallbackimage },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  function onFileSelect(uploadedImage) {
    props.setAttributes({ imgID: uploadedImage.id });
  }

  // this use Effect runs only at initial page load and checks for empty image values
  useEffect(function () {
    if (props.attributes.themeimage) {
      props.setAttributes({
        imgURL: `${slide.themeimagepath}${props.attributes.themeimage}`,
      });
    }
  }, []);

  useEffect(
    function () {
      if (props.attributes.imgID) {
        async function go() {
          const response = await apiFetch({
            path: `/wp/v2/media/${props.attributes.imgID}`,
            method: "GET",
          });
          props.setAttributes({
            themeimage: "",
            imgURL: response.media_details.sizes.pageBanner.source_url,
          });
        }
        go();
      }
    },
    [props.attributes.imgID]
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title="Background" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect}
                value={props.attributes.imgID}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image</Button>;
                }}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div
        className="hero-slider__slide"
        style={{
          backgroundImage: `url('${props.attributes.imgURL}')`,
        }}
      >
        <div className="hero-slider__interior container">
          <div className="hero-slider__overlay t-center">
            <InnerBlocks
              allowedBlocks={[
                "ourblocktheme/genericheading",
                "ourblocktheme/genericbutton",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
