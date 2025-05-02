import React from "react";
import styles from "./Work.module.css";
import info from "../../info.json";
import WorkDetails from "../../common/WorkDetails";

function Work() {
  const work = info.work;

  return (
    <section id="work" className={styles.workSection}>
      <div className={styles.workContainer}>
        {work.map((company, index) => {
          const [[companyTitle, positions]] = Object.entries(company);

          return (
            <div key={companyTitle} className={styles.companyContainer}>
              <h2 className={styles.companyTitle}>{companyTitle}</h2>

              {positions.map((position) => (
                <article
                  className={styles.positionDetails}
                  key={`${companyTitle}-${position.positionTitle}`}
                >
                  <p
                    className={
                      position.isCurrent ? styles.current : styles.past
                    }
                  >
                    {position.positionTitle}
                  </p>
                  <span className={styles.duration}>
                    {`${position.startDate} - ${position.endDate || "Present"}`}
                  </span>
                  <span className={styles.location}>{position.location}</span>
                </article>
              ))}
            </div>
          );
        })}
      </div>
      <WorkDetails />
    </section>
  );
}

export default Work;
