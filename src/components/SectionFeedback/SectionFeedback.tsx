import { Grid } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import PaperFeedback from "./PaperFeedback";

const SectionFeedback: React.FC = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          color: defaultTheme.palette.primary.main,
          padding: 20,
        }}
      >
        <Grid item xs={12} md={12} xl={12}>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={true}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <PaperFeedback
              text="01 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            tempore repellat in deserunt blanditiis perspiciatis ipsa ipsam"
            />
            <PaperFeedback
              text="02 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            tempore repellat in deserunt blanditiis perspiciatis ipsa ipsam"
            />
            <PaperFeedback
              text="03 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            tempore repellat in deserunt blanditiis perspiciatis ipsa ipsam"
            />
            <PaperFeedback
              text="04 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            tempore repellat in deserunt blanditiis perspiciatis ipsa ipsam"
            />
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionFeedback;
