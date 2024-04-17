import Max from "./Statistics/max.js"
import InverseLaplace from "./Statistics/inverse_laplace.js"
import Laplace from "./Statistics/laplace.js"
import Mean from "./Statistics/mean.js"
import Median from "./Statistics/median.js"
import Min from "./Statistics/min.js"
import Mode from "./Statistics/mode.js"
import StDev from "./Statistics/stdev.js"
import Variance from "./Statistics/variance.js"
import ZScore from "./Statistics/zscore.js"
import { motion } from 'framer-motion'
const Statistics = () => {
    return (
        <motion.div animate={{ x: 10 }} className="container-sm">
            <div id="calculus" className="">
                <div className="card col-sm-11 text-center mt-2 bg-info">
                    <div className="card-header col-sm-12  ">
                        <a href='#laplace' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Laplace Transform
                        </a>
                    </div>
                    <div id="laplace" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <Laplace />
                        </div>
                    </div>
                </div>

                <div className="card  text-center mt-2 col-sm-11">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#inverse_laplace' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Inverse Laplace
                        </a>
                    </div>
                    <div id="inverse_laplace" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <InverseLaplace />
                        </div>
                    </div>
                </div>

                <div className="card  text-center mt-2 col-sm-11">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#mean' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Mean
                        </a>
                    </div>
                    <div id="mean" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <Mean />
                        </div>
                    </div>
                </div>

                <div className="card  text-center mt-2 col-sm-11">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#mode' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Mode
                        </a>
                    </div>
                    <div id="mode" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <Mode />
                        </div>
                    </div>
                </div>

                <div className="card  text-center mt-2 col-sm-11">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#median' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Median
                        </a>
                    </div>
                    <div id="median" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <Median />
                        </div>
                    </div>
                </div>

                <div className="card  text-center mt-2 col-sm-11">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#stdev' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Standard Deviation
                        </a>
                    </div>
                    <div id="stdev" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <StDev />
                        </div>
                    </div>
                </div>

                <div className="card  text-center mt-2 col-sm-11">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#variance' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Variance
                        </a>
                    </div>
                    <div id="variance" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <Variance />
                        </div>
                    </div>
                </div>

                <div className="card  text-center mt-2 col-sm-11">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#min' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Min
                        </a>
                    </div>
                    <div id="min" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <Min />
                        </div>
                    </div>
                </div>

                <div className="card  text-center mt-2 col-sm-11">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#max' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Max
                        </a>
                    </div>
                    <div id="max" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <Max />
                        </div>
                    </div>
                </div>

                <div className="card text-center mt-2 col-sm-11 mb-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#zscore' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Z-Score
                        </a>
                    </div>
                    <div id="zscore" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <ZScore />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Statistics