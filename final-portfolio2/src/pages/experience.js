import React from "react"
import Header from '../components/header'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

function Experience() {
    return (
        <div className='experience-container' id='experience'>
            <Header />
            <h3 className='title'>Experience</h3>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jun 2020 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">STEMHIVE</h4>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Sept 2019 - Feb 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer Student</h3>
                    <h4 className="vertical-timeline-element-subtitle">Grace Hopper Program, Fullstack Academy</h4>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jul 2016 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Founder, Content Manager, Event Producer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Lullavie</h4>
                    <p>
                        <a href='http://www.lullavie.com/' target="_blank">Lullavie.com</a>
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2019 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Founder, Event Producer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Lively</h4>
                    {/* <p>
                    </p> */}
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jun 2018 - Aug 2018"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Community Associate: Marketing & Sales</h3>
                    <h4 className="vertical-timeline-element-subtitle">Mealpal</h4>
                    {/* <p>
                    </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 2017 - Dec 2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Clubs & Theatres Division Marketing Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Live Nation</h4>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 2017 - Dec 2017"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Digital Content, Marketing Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">doNYC</h4>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2014 - 2018"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor's Degree</h3>
                    <h4 className="vertical-timeline-element-subtitle">Digital Marketing Major, Journalism Minor</h4>
                    <p>
                        CUNY Baruch College
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                />
            </VerticalTimeline>
        </div>
    )

}

export default Experience;