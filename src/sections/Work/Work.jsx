import { useState } from "react";
import styles from "./Work.module.css";
import info from "../../info.json";
import WorkDetails from "../../common/WorkDetails";

function Work() {
  const work = info.work;
  const [workItems, setWorkItems] = useState(
    work[0]["Microchip Technology"][0].workItems
  );
  const [activeKey, setActiveKey] = useState("Software Engineer 1");

  const handleActiveItem = (key, workItems) => {
    setWorkItems(workItems);
    setActiveKey(key);
  };

  return (
    <section id="work" className={styles.workSection}>
      <div className={styles.workContainer}>
        {work.map((company, index) => {
          const [[companyTitle, positions]] = Object.entries(company);

          return (
            <div key={index} className={styles.companyContainer}>
              <h2 className={styles.companyTitle}>{companyTitle}</h2>

              {positions.map((position) => {
                const positionKey = `${position.positionTitle}`;

                return (
                  <article className={styles.positionDetails} key={positionKey}>
                    <p
                      onClick={() =>
                        handleActiveItem(positionKey, position.workItems)
                      }
                      className={`cursor-pointer ${
                        activeKey === positionKey
                          ? styles.active
                          : styles.inactive
                      }`}
                    >
                      {position.positionTitle}
                    </p>
                    <span className={styles.duration}>
                      {`${position.startDate} - ${
                        position.endDate || "Present"
                      }`}
                    </span>
                    <span className={styles.location}>{position.location}</span>
                  </article>
                );
              })}
            </div>
          );
        })}
      </div>
      {workItems.length > 0 && <WorkDetails workItems={workItems} />}
    </section>
  );
}

export default Work;
