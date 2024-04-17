import { motion } from 'framer-motion'
const Title = () => {
    return (
        <div className="container-fluid  p-3 bg-secondary text-light ">
            <motion.div animate={{ x: [100, 700, 640] }} transition={{ duration: 2 }} className="row text-center col-sm-2">
                <h1 className="col-sm-12">Math Hub</h1>
            </motion.div>
        </div>
    )
}
export default Title