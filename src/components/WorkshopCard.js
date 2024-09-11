import React from "react";
import styles from "../styles/Workshop.module.css";
import Image from "next/image";

export default function WorkshopCard({ img1, img2, img3, team, sname1, sname2, sname3, desc, date, form, topic1, time1, line11, line12, topic2, time2, line21, line22, topic3, time3, line31, line32, topic4, time4, line41, line42, topic5, time5, line51, line52 }) {
    return (
        <div className={styles.card}>
            <div className={styles.soon} style={{ display: team === "null" ? null : "none" }}>
                <h1>Revealing Soon</h1>
            </div>
            <div className={styles.header} style={{ display: team === "null" ? "none" : null }}>
                <div className={styles.content}>
                    <div className={styles.desc}>{desc}</div>
                    <div className={styles.bottom}>
                        <h6><span>Date: </span>{date}</h6>
                        {/* <a href={form} target="_blank">Register Here</a> */}
                    </div>
                </div>
                <div className={styles.profile}>
                    <div className={styles.speaker}>
                        <Image src={img1} alt={`${team} image`}></Image>
                        <p><span>Speaker: </span>{sname1}</p>
                    </div>
                    <div className={styles.speaker}>
                        <Image src={img2} alt={`${team} image`}></Image>
                        <p><span>Speaker: </span>{sname2}</p>
                    </div>
                    <div className={styles.speaker}>
                        <Image src={img3} alt={`${team} image`}></Image>
                        <p><span>Speaker: </span>{sname3}</p>
                    </div>
                </div>
            </div>
            <div className={styles.events} style={{ display: team === "null" ? "none" : null }}>
                <div className={styles.timeline}>
                    <div className={styles.left}>
                        <h6>{topic1}</h6>
                        <p>{time1}</p>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <span></span>
                            <p>{line11}</p>
                        </div>
                        <div>
                            <span></span>
                            <p>{line12}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.left}>
                        <h6>{topic2}</h6>
                        <p>{time2}</p>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <span></span>
                            <p>{line21}</p>
                        </div>
                        <div>
                            <span></span>
                            <p>{line22}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.left}>
                        <h6>{topic3}</h6>
                        <p>{time3}</p>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <span></span>
                            <p>{line31}</p>
                        </div>
                        <div>
                            <span></span>
                            <p>{line32}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.left}>
                        <h6>{topic4}</h6>
                        <p>{time4}</p>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <span></span>
                            <p>{line41}</p>
                        </div>
                        <div>
                            <span></span>
                            <p>{line42}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.left}>
                        <h6>{topic5}</h6>
                        <p>{time5}</p>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <span></span>
                            <p>{line51}</p>
                        </div>
                        <div>
                            <span></span>
                            <p>{line52}</p>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.registerButton}>
                    <a href={form} target="_blank">Register Here</a>
                </div> */}
            </div>
        </div>
    );
}
