import Arg from "./Complex/arg.js"
import ImgPart from "./Complex/img_part.js"
import PolarForm from "./Complex/polar_form.js"
import RealPart from "./Complex/real_part.js"
import RectangularForm from "./Complex/rectangular_form.js"
import { motion } from 'framer-motion'
const Complex = () => {
    return (
        <motion.div animate={{ x: 10 }} className="container-sm">
            <div id="calculus" className="">
                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#polar_form' className="btn col-sm-12" data-bs-toggle="collapse">
                            Polar Form
                        </a>
                    </div>
                    <div id="polar_form" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <PolarForm />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#rectangular_form' className="btn col-sm-12" data-bs-toggle="collapse">
                            Rectangular Form
                        </a>
                    </div>
                    <div id="rectangular_form" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <RectangularForm />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#arg' className="btn col-sm-12" data-bs-toggle="collapse">
                            Argument
                        </a>
                    </div>
                    <div id="arg" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <Arg />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#img_part' className="btn col-sm-12" data-bs-toggle="collapse">
                            Imaginary Part
                        </a>
                    </div>
                    <div id="img_part" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <ImgPart />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#real_part' className="btn col-sm-12" data-bs-toggle="collapse">
                            Real Part
                        </a>
                    </div>
                    <div id="real_part" className="collapse col-sm-12 bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <RealPart />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Complex