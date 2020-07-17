import React from "react";
//import { Button as AntButton } from "antd"; <AntButton type="primary">点我</AntButton>
import { Carousel } from "react-bootstrap";
import "./Home.css";

const HomePage = () => (
  <div className="main">
    <div className="main-block main-slide-window">
      <div className="main-block slide-window">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    <div className="main-block main-feature">
      <div className="main-feature-item">
        <p>
          Adobe Experience Platform documentation is provided in multiple
          formats, including overviews, tutorials, and guides for both the user
          interface and API. Here is a brief description of the most common
          documentation types that are available for Experience Platform
          services: API reference: Consult the API reference documentation for
          each service to learn details about available endpoints, including
          headers, parameters, sample requests, and responses. These reference
          materials do not provide the same level of detail as the
          documentation. It is recommended to consult the service-specific
          developer guide for detailed API usage examples.
        </p>
      </div>
      <div className="main-feature-item">
        <p>
          Developer guide: Each developer guide provides in-depth usage
          information for all API endpoints available for a specific service.
          The guide includes available query parameters, sample requests, and
          sample responses, as well as outlining "gotchas" to avoid when making
          calls to Platform APIs. Overview: An overview provides a high-level
          outline of the service or feature and how it interacts with other
          Platform services. The overview is the best place to start when
          learning about new features and functionality within Platform.
          Troubleshooting guide: Use the troubleshooting guide to find answers
          to frequently asked questions and information regarding error messages
          that you are likely to encounter when using the API.
        </p>
      </div>
      <div className="main-feature-item">
        <p>
          The Experience Platform troubleshooting guide provides support for
          general questions and errors, while individual services provide
          troubleshooting guides specific to their area. Tutorial: A tutorial is
          a step-by-step guide through the UI, API, or a mix of both, that leads
          to a specific outcome. Unlike a developer guide, an API tutorial may
          only focus on one or two endpoints and is not an exhaustive API
          resource. Similarly, UI tutorials may focus only on specific steps,
          not the complete user interface available for that service. Tutorials
          are often part of a larger workflow and feature "next steps" that
          describe which tutorials you may want to try next.
        </p>
      </div>
    </div>
    <div className="main-block main-others">
      <p>
        As shown in the previous diagram, all VMs compete for messages on the
        work-item queue. However, only three VMs can acquire messages from
        control queues, and each VM locks a single control queue. Orchestration
        instances and entities are distributed across all control queue
        instances. The distribution is done by hashing the instance ID of the
        orchestration or the entity name and key pair. Orchestration instance
        IDs by default are random GUIDs, ensuring that instances are equally
        distributed across all control queues. Generally speaking, orchestrator
        functions are intended to be lightweight and should not require large
        amounts of computing power. It is therefore not necessary to create a
        large number of control queue partitions to get great throughput for
        orchestrations. Most of the heavy work should be done in stateless
        activity functions, which can be scaled out infinitely.
      </p>
    </div>
  </div>
);

export default HomePage;
