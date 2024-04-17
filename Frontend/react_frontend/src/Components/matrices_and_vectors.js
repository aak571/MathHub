import react from 'react'
import nerdamer from 'nerdamer'
import { motion } from 'framer-motion'
const MatricesAndVectors = () => {
    const [states, set_states] = react.useState({ input_for_user: 'Start Inputting', input_for_comp: '', output: 'Your result appears here', func_arr_user: [], func_arr_comp: [], sign_arr: [] })
    let input_comp, input_user, func_user, func_comp, result
    const compute_result = () => {
        try {
            if (input_comp === '') {
                result = 'Your result appears here'
            }
            else {
                result = nerdamer(input_comp).toString()
                if (result[0] === 'm') {
                    result = result.slice(7, result.length - 1)
                }
            }
        }
        catch {
            result = 'Please enter a meaningful expression or check our guide'
        }
    }

    const input_click_handler_mat_functions = e => {
        if (states.input_for_comp) {
            input_user = states.input_for_user
            input_comp = states.input_for_comp
        }
        else {
            input_user = ""
            input_comp = ""
        }
        switch (e.target.innerHTML) {
            case 'mat':
                input_user = input_user + 'mat('
                input_comp = input_comp + 'matrix('
                func_user = 4
                func_comp = 7
                break
            case 'trp':
                input_user = input_user + 'trp('
                input_comp = input_comp + 'transpose('
                func_user = 4
                func_comp = 10
                break
            case 'imat':
                input_user = input_user + 'imat('
                input_comp = input_comp + 'imatrix('
                func_user = 5
                func_comp = 8
                break
            case 'cross':
                input_user = input_user + 'cross('
                input_comp = input_comp + 'cross('
                func_user = 6
                func_comp = 6
                break
            case 'dot':
                input_user = input_user + 'dot('
                input_comp = input_comp + 'dot('
                func_user = 4
                func_comp = 4
                break
            case 'det':
                input_user = input_user + 'det('
                input_comp = input_comp + 'determinant('
                func_user = 4
                func_comp = 12
                break
            case 'ord':
                input_user = input_user + 'ord('
                input_comp = input_comp + 'size('
                func_user = 4
                func_comp = 5
                break
            case 'inv':
                input_user = input_user + 'inv('
                input_comp = input_comp + 'invert('
                func_user = 4
                func_comp = 7
                break
        }
        compute_result()
        set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
    }

    const input_1_click_handler = e => {
        if (states.input_for_comp) {
            input_user = states.input_for_user
            input_comp = states.input_for_comp
        }
        else {
            input_user = ""
            input_comp = ""
        }
        switch (e.target.innerHTML) {
            case '[':
                input_user = input_user + '['
                input_comp = input_comp + '['
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result })
                break
            case ']':
                input_user = input_user + ']'
                input_comp = input_comp + ']'
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result })
                break
            case ')':
                input_user = input_user + ')'
                input_comp = input_comp + ')'
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result })
                break
            case 'sqrt':
                input_user = input_user + 'sqrt('
                input_comp = input_comp + 'sqrt('
                func_user = 5
                func_comp = 5
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'cbrt':
                input_user = input_user + 'cbrt('
                input_comp = input_comp + 'cbrt('
                func_user = 5
                func_comp = 5
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case '^':
                input_user = input_user + '^'
                input_comp = input_comp + '^'
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result })
                break
            case 'pi':
                input_user = input_user + 'pi'
                input_comp = input_comp + 'pi'
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result })
                /*func_user = 2
                func_comp = 2*/
                break
            case 'sin':
                input_user = input_user + 'sin('
                input_comp = input_comp + 'sin('
                func_user = 4
                func_comp = 4
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'cos':
                input_user = input_user + 'cos('
                input_comp = input_comp + 'cos('
                func_user = 4
                func_comp = 4
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'tan':
                input_user = input_user + 'tan('
                input_comp = input_comp + 'tan('
                func_user = 4
                func_comp = 4
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'cot':
                input_user = input_user + 'cot('
                input_comp = input_comp + 'cot('
                func_user = 4
                func_comp = 4
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'sec':
                input_user = input_user + 'sec('
                input_comp = input_comp + 'sec('
                func_user = 4
                func_comp = 4
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'csc':
                input_user = input_user + 'csc('
                input_comp = input_comp + 'csc('
                func_user = 4
                func_comp = 4
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
        }
    }

    const input_2_click_handler = e => {
        if (states.input_for_comp) {
            input_user = states.input_for_user
            input_comp = states.input_for_comp
        }
        else {
            input_user = ""
            input_comp = ""
        }
        switch (e.target.innerHTML) {
            case '1':
                input_user = input_user + '1'
                input_comp = input_comp + '1'
                break
            case '2':
                input_user = input_user + '2'
                input_comp = input_comp + '2'
                break
            case '3':
                input_user = input_user + '3'
                input_comp = input_comp + '3'
                break
            case '4':
                input_user = input_user + '4'
                input_comp = input_comp + '4'
                break
            case '5':
                input_user = input_user + '5'
                input_comp = input_comp + '5'
                break
            case '6':
                input_user = input_user + '6'
                input_comp = input_comp + '6'
                break
            case '7':
                input_user = input_user + '7'
                input_comp = input_comp + '7'
                break
            case '8':
                input_user = input_user + '8'
                input_comp = input_comp + '8'
                break
            case '9':
                input_user = input_user + '9'
                input_comp = input_comp + '9'
                break
            case '0':
                input_user = input_user + '0'
                input_comp = input_comp + '0'
                break
            case '+':
                input_user = input_user + '+'
                input_comp = input_comp + '+'
                break
            case '-':
                input_user = input_user + '-'
                input_comp = input_comp + '-'
                break
            case '*':
                input_user = input_user + '*'
                input_comp = input_comp + '*'
                break
            case '/':
                input_user = input_user + '/'
                input_comp = input_comp + '/'
                break
            case ',':
                input_user = input_user + ','
                input_comp = input_comp + ','
                break
            case '.':
                input_user = input_user + '.'
                input_comp = input_comp + '.'
                break
        }
        compute_result()
        set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result })
    }
    console.log(states.func_arr_user, states.func_arr_comp)
    const clear_click_handler = e => {
        if (e.target.id === 'all_clear') {
            set_states({ ...states, input_for_user: 'Start Inputting', input_for_comp: '', output: 'Your result appears here' })
        }
        else {
            if (states.input_for_user !== 'Start Inputting') {
                let str_user = states.input_for_user
                let str_comp = states.input_for_comp
                if (str_user[str_user.length - 1] === '(') {
                    console.log(input_user, input_comp)
                    input_user = str_user.slice(0, str_user.length - states.func_arr_user[states.func_arr_user.length - 1])
                    input_comp = str_comp.slice(0, str_comp.length - states.func_arr_comp[states.func_arr_comp.length - 1])
                    states.func_arr_user.pop()
                    states.func_arr_comp.pop()
                }
                else if (str_user[str_user.length - 1] === 'i') {
                    input_user = str_user.slice(0, str_user.length - 2)
                    input_comp = str_comp.slice(0, str_comp.length - 2)
                }
                else {
                    input_user = str_user.slice(0, str_user.length - 1)
                    input_comp = str_comp.slice(0, str_comp.length - 1)
                }
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result })
            }
        }
    }

    return (
        <motion.div animate={{ x: 10 }} className="container-sm mt-4 col-sm-10">
            <div className="col-sm-10 ms-5">
                <div className='card col-sm-12'>
                    {(states.input_for_user === 'Start Inputting' || states.input_for_user === '') && <div className="col-sm-12 card-body border border-3 fs-4  bg-dark text-light">Start Inputting</div>}
                    {states.input_for_user !== 'Start Inputting' && states.input_for_user !== '' && <div className="col-sm-12 card-body border border-3 fs-4 bg-dark text-light">{states.input_for_user}</div>}
                </div>
                <div className='col-sm-12 mt-5 text-center'>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-4 rounded shadow bg-warning'>mat</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-4 rounded shadow bg-warning'>trp</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-4 rounded shadow bg-warning'>imat</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-4 rounded shadow bg-warning'>cross</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-4 rounded shadow bg-warning'>dot</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-4 rounded shadow bg-warning'>det</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-4 rounded shadow  bg-warning'>ord</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-4 rounded shadow bg-warning'>inv</button>
                </div>
                <div className='d-flex col-sm-12 mt-3 justify-content-between'>
                    <div className='col-sm-5 text-center'>
                        <a onClick={input_1_click_handler} className='btn col-sm-1 border fs-5 me-4 bg-info'>[</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-1 border fs-5 me-4 bg-info'>]</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-1 border fs-5 me-4 bg-info'>)</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 bg-info'>^</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 shadow  bg-success text-light'>sqrt</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 shadow mt-5  bg-success text-light'>cbrt</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-5 shadow  bg-success text-light'>pi</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-5 shadow  bg-success text-light'>sin</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-5 shadow bg-success text-light'>cos</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-5 shadow bg-success text-light'>tan</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-5 shadow bg-success text-light'>cot</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-5 shadow bg-success text-light'>sec</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-5 shadow bg-success text-light'>csc</a>
                    </div>
                    <div className='col-sm-6 text-center'>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-secondary text-light'>1</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-secondary text-light'>2</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-secondary text-light'>3</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-secondary text-light'>4</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-secondary text-light'>5</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-secondary text-light'>6</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-secondary text-light'>7</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-secondary text-light'>8</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-secondary text-light'>9</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-secondary text-light'>0</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-4 mt-5  bg-danger text-light'>+</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-4 mt-5 bg-danger text-light'>-</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-4 mt-5 bg-danger text-light'>*</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-4 mt-5 bg-danger text-light'>/</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-4 mt-5 bg-danger text-light'>,</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-5 mt-5 bg-danger text-light'>.</a>
                        <a onClick={clear_click_handler} className='btn col-sm-2 fs-2 me-4 mt-5'><i id='back_space' className="bi bi-backspace-fill"></i></a>
                        <a onClick={clear_click_handler} className='btn col-sm-2 fs-2 me-4 mt-5'><i id='all_clear' className="bi bi-x-octagon-fill"></i></a>
                    </div>
                </div>
                <div className='card mt-5 '>
                    {states.output === 'Your result appears here' && <div className="col-sm-12 card-body  border border-3 fs-4 bg-dark text-light">Your result appears here</div>}
                    {states.output === 'Please enter a meaningful expression or check our guide' && <div className="col-sm-12 card-body text-danger border border-3 fs-4 bg-dark ">{states.output}</div>}
                    {states.output !== 'Your result appears here' && states.output !== 'Please enter a meaningful expression or check our guide' && <div className="col-sm-12 card-body  border border-3 fs-4 bg-dark text-light">{states.output}</div>}
                </div>
            </div>
        </motion.div>
    )
}
export default MatricesAndVectors