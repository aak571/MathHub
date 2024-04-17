import react from 'react'
import { evaluate } from 'mathjs'
import nerdamer from 'nerdamer'
import { motion } from 'framer-motion'
const Arithmetic = () => {
    const [states, set_states] = react.useState({ input_for_user: 'Start Inputting', input_for_comp: '', output: 'Your result appears here', func_arr_user: [], func_arr_comp: [], sign_arr: [] })
    let input_comp, input_user, func_user, func_comp, result
    const compute_result = () => {
        try {
            if (input_comp === '') {
                result = 'Your result appears here'
            }
            else {
                result = evaluate(nerdamer(input_comp).evaluate().toString()).toString()
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
            case 'abs':
                input_user = input_user + 'abs('
                input_comp = input_comp + 'abs('
                func_user = 4
                func_comp = 4
                break
            case 'floor':
                input_user = input_user + 'floor('
                input_comp = input_comp + 'floor('
                func_user = 6
                func_comp = 6
                break
            case 'ceil':
                input_user = input_user + 'ceil('
                input_comp = input_comp + 'ceil('
                func_user = 5
                func_comp = 5
                break
            case 'Si':
                input_user = input_user + 'Si('
                input_comp = input_comp + 'Si('
                func_user = 3
                func_comp = 3
                break
            case 'Ci':
                input_user = input_user + 'Ci('
                input_comp = input_comp + 'Ci('
                func_user = 3
                func_comp = 3
                break
            case 'Ei':
                input_user = input_user + 'Ei('
                input_comp = input_comp + 'Ei('
                func_user = 3
                func_comp = 3
                break
            case 'rect':
                input_user = input_user + 'rect('
                input_comp = input_comp + 'rect('
                func_user = 5
                func_comp = 5
                break
            case 'step':
                input_user = input_user + 'step('
                input_comp = input_comp + 'step('
                func_user = 5
                func_comp = 5
                break
            case 'sinc':
                input_user = input_user + 'sinc('
                input_comp = input_comp + 'sinc('
                func_user = 5
                func_comp = 5
                break
            case 'Shi':
                input_user = input_user + 'Shi('
                input_comp = input_comp + 'Shi('
                func_user = 4
                func_comp = 4
                break
            case 'Chi':
                input_user = input_user + 'Chi('
                input_comp = input_comp + 'Chi('
                func_user = 4
                func_comp = 4
                break
            case 'fact':
                input_user = input_user + 'fact('
                input_comp = input_comp + 'fact('
                func_user = 5
                func_comp = 5
                break
            case 'dfact':
                input_user = input_user + 'dfact('
                input_comp = input_comp + 'dfactorial('
                func_user = 6
                func_comp = 11
                break

            case 'mod':
                input_user = input_user + 'mod('
                input_comp = input_comp + 'mod('
                func_user = 4
                func_comp = 4
                break
            case 'round':
                input_user = input_user + 'round('
                input_comp = input_comp + 'round('
                func_user = 6
                func_comp = 6
                break
            case 'fib':
                input_user = input_user + 'fib('
                input_comp = input_comp + 'fib('
                func_user = 4
                func_comp = 4
                break
            case 'tri':
                input_user = input_user + 'tri('
                input_comp = input_comp + 'tri('
                func_user = 4
                func_comp = 4
                break
            case 'cf':
                input_user = input_user + 'cf('
                input_comp = input_comp + 'continued_fraction('
                func_user = 3
                func_comp = 19
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
            case 'log':
                input_user = input_user + 'log('
                input_comp = input_comp + 'log10('
                func_user = 4
                func_comp = 6
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'ln':
                input_user = input_user + 'ln('
                input_comp = input_comp + 'log('
                func_user = 3
                func_comp = 4
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'e':
                input_user = input_user + 'e'
                input_comp = input_comp + 'e'
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result })
                break



            case 'pi':
                input_user = input_user + 'pi'
                input_comp = input_comp + 'pi'
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result })
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

            case 'sin i':
                input_user = input_user + 'sin i('
                input_comp = input_comp + 'asin('
                func_user = 6
                func_comp = 5
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'cos i':
                input_user = input_user + 'cos i('
                input_comp = input_comp + 'acos('
                func_user = 6
                func_comp = 5
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'tan i':
                input_user = input_user + 'tan i('
                input_comp = input_comp + 'atan('
                func_user = 6
                func_comp = 5
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'cot i':
                input_user = input_user + 'cot i('
                input_comp = input_comp + 'acot('
                func_user = 6
                func_comp = 5
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'sec i':
                input_user = input_user + 'sec i('
                input_comp = input_comp + 'asec('
                func_user = 6
                func_comp = 5
                compute_result()
                set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })
                break
            case 'csc i':
                input_user = input_user + 'csc i('
                input_comp = input_comp + 'acsc('
                func_user = 6
                func_comp = 5
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
            case '.':
                input_user = input_user + '.'
                input_comp = input_comp + '.'
                break
            case ',':
                input_user = input_user + ','
                input_comp = input_comp + ','
                break
            case 'sinh':
                input_user = input_user + 'sinh('
                input_comp = input_comp + 'sinh('
                func_user = 5
                func_comp = 5
                break
            case 'cosh':
                input_user = input_user + 'cosh('
                input_comp = input_comp + 'cosh('
                func_user = 5
                func_comp = 5
                break
            case 'tanh':
                input_user = input_user + 'tanh('
                input_comp = input_comp + 'tanh('
                func_user = 5
                func_comp = 5
                break
            case 'coth':
                input_user = input_user + 'coth('
                input_comp = input_comp + 'coth('
                func_user = 5
                func_comp = 5
                break
            case 'sech':
                input_user = input_user + 'sech('
                input_comp = input_comp + 'sech('
                func_user = 5
                func_comp = 5
                break
            case 'csch':
                input_user = input_user + 'csch('
                input_comp = input_comp + 'csch('
                func_user = 5
                func_comp = 5
                break
            case 'sinh i':
                input_user = input_user + 'sinh i('
                input_comp = input_comp + 'sinh i('
                func_user = 7
                func_comp = 7
                break
            case 'cosh i':
                input_user = input_user + 'cosh i('
                input_comp = input_comp + 'cosh i('
                func_user = 7
                func_comp = 7
                break
            case 'tanh i':
                input_user = input_user + 'tanh i('
                input_comp = input_comp + 'tanh i('
                func_user = 7
                func_comp = 7
                break
            case 'coth i':
                input_user = input_user + 'coth i('
                input_comp = input_comp + 'coth i('
                func_user = 7
                func_comp = 7
                break
            case 'sech i':
                input_user = input_user + 'sech i('
                input_comp = input_comp + 'sech i('
                func_user = 7
                func_comp = 7
                break
            case 'csch i':
                input_user = input_user + 'csch i('
                input_comp = input_comp + 'csch i('
                func_user = 7
                func_comp = 7
                break
        }
        compute_result()
        set_states({ ...states, input_for_user: input_user, input_for_comp: input_comp, output: result, func_arr_user: [...states.func_arr_user, func_user], func_arr_comp: [...states.func_arr_comp, func_comp] })

    }
    const clear_click_handler = e => {
        if (e.target.id === 'all_clear') {
            set_states({ ...states, input_for_user: 'Start Inputting', input_for_comp: '', output: 'Your result appears here' })
        }
        else {
            if (states.input_for_user !== 'Start Inputting') {
                let str_user = states.input_for_user
                let str_comp = states.input_for_comp
                if (str_user[str_user.length - 1] === '(') {
                    console.log('INNN', states.func_arr_user[states.func_arr_user.length - 1])
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

    console.log(states)

    return (
        <motion.div animate={{ x: 10 }} className="container-sm mt-3 col-sm-10">
            <div className="col-sm-10 ms-5">
                <div className='card col-sm-12'>
                    {(states.input_for_user === 'Start Inputting' || states.input_for_user === '') && <div className="col-sm-12 card-body border border-3 fs-4 bg-dark text-light">Start Inputting</div>}
                    {states.input_for_user !== 'Start Inputting' && states.input_for_user !== '' && <div className="col-sm-12 card-body border border-3 fs-4 bg-dark text-light">{states.input_for_user}</div>}
                </div>
                <div className='col-sm-12 mt-4 text-center'>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning '>abs</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning'>floor</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning'>ceil</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning'>Si</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning'>Ci</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning'>Ei</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning'>rect</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded mt-1 shadow bg-warning'>step</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning'>sinc</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded mt-1 shadow bg-warning'>Shi</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning mt-1'>Chi</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning mt-1'>fact</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning mt-1'>dfact</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning mt-1'>mod</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded  shadow bg-warning mt-1'>round</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning mt-1'>fib</button>
                    <button onClick={input_click_handler_mat_functions} className='col-sm-1 me-3 rounded shadow bg-warning mt-1'>tri</button>
                </div>
                <div className='d-flex col-sm-12 mt-3 justify-content-between'>
                    <div className='col-sm-5 text-center'>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 bg-info'>^</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 bg-info'>e</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 bg-info'>)</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 shadow bg-danger text-light'>sqrt</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 shadow bg-danger text-light'>cbrt</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-danger text-light'>log</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-danger text-light'>ln</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-danger text-light'>pi</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>sin</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>cos</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>tan</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>cot</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>sec</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>csc</a>

                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-secondary text-light'>sin i</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-secondary text-light'>cos i</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-secondary text-light'>tan i</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-secondary text-light'>cot i</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-secondary text-light'>sec i</a>
                        <a onClick={input_1_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-secondary text-light'>csc i</a>

                    </div>
                    <div className='col-sm-6 text-center'>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-info'>1</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-info'>2</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-info'>3</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-info'>4</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-info'>5</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-info'>6</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-info'>7</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-info'>8</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-info'>9</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 me-2 bg-info'>0</a>

                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 mx-3 mt-1  bg-secondary text-light'>+</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 mx-3 mt-1 bg-secondary text-light'>-</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 mx-3 mt-1 bg-secondary text-light'>*</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 mx-3 mt-1 bg-secondary text-light'>/</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 mx-3 mt-1 bg-secondary text-light'>,</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-1 border fs-5 mx-3 mt-1 bg-secondary text-light'>.</a>



                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>sinh</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>cosh</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>tanh</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>coth</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>sech</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow bg-success text-light'>csch</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow text-light bg-danger'>sinh i</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow text-light bg-danger'>cosh i</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow text-light bg-danger'>tanh i</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow text-light bg-danger'>coth i</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow text-light bg-danger'>sech i</a>
                        <a onClick={input_2_click_handler} className='btn col-sm-2 border fs-5 me-4 mt-1 shadow text-light bg-danger'>csch i</a>

                        <a onClick={clear_click_handler} className='btn col-sm-2 fs-2 me-4 mt-1'><i id='back_space' className="bi bi-backspace-fill"></i></a>
                        <a onClick={clear_click_handler} className='btn col-sm-2 fs-2 me-4 mt-1'><i id='all_clear' className="bi bi-x-octagon-fill"></i></a>
                    </div>
                </div>
                <div className='card mt-4'>
                    {states.output === 'Your result appears here' && <div className="col-sm-12 card-body border border-3 bg-dark text-light fs-4">Your result appears here</div>}
                    {states.output === 'Please enter a meaningful expression or check our guide' && <div className="col-sm-12 card-body border border-3 text-danger fs-4 bg-dark">{states.output}</div>}
                    {states.output !== 'Your result appears here' && states.output !== 'Please enter a meaningful expression or check our guide' && <div className="col-sm-12 card-body fs-4 border border-3  bg-dark text-light">{states.output}</div>}
                </div>
            </div>
        </motion.div>
    )
}
export default Arithmetic