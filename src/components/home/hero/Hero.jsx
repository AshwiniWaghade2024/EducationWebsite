import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title.jsx'
const Hero = () => {
    return (
        <>
           <section className='hero'>
                <div className="container">
                    <div className="row">
                        <Title subtitle='WELCOME TO ACADEMIA' title="Best Online Education"/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quibusdam laborum fuga maiores reiciendis atque explicabo praesentium vitae sint fugiat ab sapiente et ipsum eius, veniam facere corporis! Sapiente, suscipit.</p>
                        <div className="button">
                            <button className='primary-btn'>
                                GET STARTED NOW <i className='fab fa-long-arrow-alt-right'></i>
                            </button>
                            <button >
                                VIEW COURSE <i className='fab fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
           </section>
           <div className="margin"></div>
        </>
    )
}

export default Hero
