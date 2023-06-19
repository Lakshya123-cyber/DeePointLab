import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/coinbase.png"
          width={150}
          height={50}
          alt="hi"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/exodus.png"
          width={150}
          height={50}
          alt="hi"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/extra.png"
          width={150}
          height={50}
          alt="hi"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/nativescript.png"
          width={150}
          height={50}
          alt="hi"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/picnic.png"
          width={150}
          height={50}
          alt="hi"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
    <br />
    <br />
    <SliderContainer className="" contentWidth={1290} initialOffsetX={100}>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/rainbow.png"
          width={150}
          height={50}
          alt="hi"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/redbull.png"
          width={150}
          height={50}
          alt="hi"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/shopify.png"
          width={150}
          height={50}
          alt="hi"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/status.png"
          width={150}
          height={50}
          alt="hi"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/stori.png"
          width={150}
          height={50}
          alt="hi"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/walletconnect.png"
          width={150}
          height={50}
          alt="hi"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
