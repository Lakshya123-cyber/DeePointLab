import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Lakshya (Yo yo)">
        Deep Point Lab has been instrumental in transforming our business
        strategy. Their expertise and insightful guidance have helped us
        navigate complex challenges with ease. Highly recommended for their
        exceptional consulting services!
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Lakshya (Yo yo)">
        Deep Point Lab is a trusted advisor that has brought tremendous value to
        our organization. Their analytical approach, combined with their deep
        industry knowledge, has helped us streamline operations and maximize
        profitability. We couldn&apos;t be happier with their services
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Lakshya (Yo yo)">
        Deep Point Lab has been instrumental in transforming our business
        strategy. Their expertise and insightful guidance have helped us
        navigate complex challenges with ease. Highly recommended for their
        exceptional consulting services!
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Lakshya (Yo yo)">
        We were looking for a consulting company that could bring fresh
        perspectives to our business challenges, and Deep Point Lab delivered
        just that. Their team&apos;s expertise, combined with their ability to
        communicate complex ideas effectively, has been invaluable in driving
        our success.
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Lakshya (Yo yo)">
        Deep Point Lab stands out as a consulting firm that truly understands
        the needs of businesses. Their innovative solutions and strategic
        guidance have enabled us to overcome obstacles and achieve remarkable
        results. Their professionalism and commitment to excellence make them a
        standout choice.
      </Review>
    </CarouselItem>
    <CarouselItem index={5}>
      <Review by="Lakshya (Yo yo)">
        Deep Point Lab&apos;s consulting services have been a catalyst for our
        growth and development. Their team&apos;s deep industry insights and
        practical approach have helped us make informed decisions and stay ahead
        of the competition. We highly recommend their services to any company
        seeking transformative solutions.
      </Review>
    </CarouselItem>
    <CarouselItem index={6}>
      <Review by="Lakshya (Yo yo)">
        Deep Point Lab has been instrumental in transforming our business
        strategy. Their expertise and insightful guidance have helped us
        navigate complex challenges with ease. Highly recommended for their
        exceptional consulting services!
      </Review>
    </CarouselItem>
    <CarouselItem index={7}>
      <Review by="Lakshya (Yo yo)">
        Deep Point Lab combines a strong business acumen with a personalized
        approach. Their tailored consulting solutions have empowered us to make
        informed decisions and drive positive change within our organization. We
        couldn&apos;t be more satisfied with the outcome.
      </Review>
    </CarouselItem>
    <CarouselItem index={8}>
      <Review by="Lakshya (Yo yo)">
        Deep Point Lab has been an invaluable partner in our business journey.
        Their ability to identify untapped opportunities and develop effective
        strategies has had a profound impact on our bottom line. Their
        consulting expertise is second to none!
      </Review>
    </CarouselItem>
    <CarouselItem index={9}>
      <Review by="Lakshya (Yo yo)">
        Deep Point Lab&apos;s consulting services have been instrumental in
        optimizing our operations and enhancing overall efficiency. Their
        team&apos;s expertise, professionalism, and dedication to achieving
        results make them a top choice for any business seeking strategic
        guidance.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
