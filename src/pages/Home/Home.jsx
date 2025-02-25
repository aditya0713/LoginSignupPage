import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={`${styles.firstRow} row`}>
        <div className={`${styles.firstRowCol} col-sm-12`}>
          <h4>
            Everyone is a buyer, everyone's a potential purchaser and everyone's
            a potential vendor.
          </h4>
          <p className={`${styles.youDemand}`}>- You demand : We supply</p>
        </div>
      </div>

      <div className={`${styles.container}`}>
        {/* second row */}
        <div className={`${styles.secondRow} row`}>
          <div className={`${styles.secondRowCol} col-sm-12`}>
            <h2 style={{ marginTop: "1%" }}>OUR TEAM</h2>
          </div>
          <div className={`${styles.secondRowCol} col-sm-12`}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "30px",
              }}
            >
              <div className={`${styles.secondRowColTeamImages}`}></div>
              <div className={`${styles.secondRowColTeamImages}`}></div>
              <div className={`${styles.secondRowColTeamImages}`}></div>
              <div className={`${styles.secondRowColTeamImages}`}></div>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className={`${styles.thirdRow} row`}>
          <div className={`${styles.thirdRowCol} col-sm-6 `}>
            <h2>VISION</h2>
            <p>
              The vision of an inventory management system is to revolutionize
              the way businesses handle their inventory operations, aiming to
              streamline processes, enhance efficiency, and optimize resource
              utilization. It envisions a future where organizations can
              effortlessly manage their stock levels, track inventory movements
              in real-time, and make data-driven decisions to meet customer
              demands promptly. Ultimately, the vision is to empower businesses
              with the tools and insights needed to achieve optimal inventory
              management, thereby fostering growth, profitability, and customer
              satisfaction.
            </p>
          </div>
          <div className={`${styles.thirdRowCol} col-sm-6 `}>
            <h3>MISSION</h3>
            <p>
              The mission of an inventory management system is to provide
              businesses with a comprehensive solution that enables efficient
              tracking, management, and optimization of their inventory. It aims
              to streamline processes, reduce costs, and enhance productivity by
              automating manual tasks, such as inventory tracking, ordering, and
              replenishment. The system's mission is to ensure that businesses
              have the right products in the right quantities at the right time,
              minimizing stockouts and overstock situations. Ultimately, the
              mission is to empower businesses of all sizes to effectively
              manage their inventory, improve customer satisfaction, and achieve
              sustainable growth.
            </p>
          </div>
        </div>

        <div className={`${styles.fourthdRow} row`}>
          <div className={`${styles.fourthRowCol} col-sm-2`}></div>
          <div className={`${styles.fourthRowCol} col-sm-8`}>
            <div className={`${styles.fourthRowCol} col-sm-2`}></div>
            <h3 className={`${styles.fourthRowColHeading}`}>
              We’re a highly collaborative and supportive team, coming together
              on every product to ensure our customer get the very best result.
            </h3>
            {/* <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "30px",
            }}
          >
            <div className={`${styles.fourthRowColCertificate}`}></div>
            <div className={`${styles.fourthRowColCertificate}`}></div>
            <div className={`${styles.fourthRowColCertificate}`}></div>
            <div className={`${styles.fourthRowColCertificate}`}></div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
