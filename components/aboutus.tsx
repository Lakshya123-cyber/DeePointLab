import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>Deep Point Lab</strong> specializes in expert tech consultancy
          services that empower businesses in the digital landscape. We deliver
          tailored solutions for growth, efficiency, and innovation, helping
          your business reach new heights.
          <br />
          <br />
          Our Services:
          <br />- <b>Software Development</b>: Custom software solutions
          tailored to your business needs, including web applications, mobile
          apps, and enterprise software.
          <br />- <b>IT Infrastructure Optimization</b>: Assessing and
          optimizing your IT infrastructure for improved performance,
          scalability, security, and cost-effectiveness.
          <br />- <b>Data Analysis and Business Intelligence</b>: Unlocking the
          power of data through advanced analytics and visualization techniques
          to gain valuable insights and make informed business decisions.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2 className="">Our Team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member id="a" name="person" socialId="@person" />
          <Member id="b" name="person" socialId="@person" />
          <Member id="c" name="person" socialId="@person" />
          <Member id="d" name="person" socialId="@person" />
          <Member id="e" name="person" socialId="@person" />
          <Member id="f" name="person" socialId="@person" />
          <Member id="g" name="person" socialId="@person" />
          <Member id="h" name="person" socialId="@person" />
          <Member id="i" name="person" socialId="@person" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
