const resetResults = () => {
    const display = document.getElementById("display")
    display.innerHTML = ""
}

const createTemplate = () => {
    const div = document.createElement("div")
    div.className = "outputField"
    return div
}

const positiveOrNegative = () => {
    resetResults()
    let totalNumbers = Number(prompt("Quantos números serão avaliados"))

    for( let i = 0 ; i < totalNumbers ; i++ ){
        let number = Number(prompt("Digite um número"))
        if(number > 0){
            alert("Número positivo")
        }else if(number < 0){
            alert("Número negativo")
        }else{
            alert("Número é 0")
        }
    }
}

const numbersAreEqual = () => {
    resetResults()
    let display = document.getElementById("display")
    let formTemplate = createTemplate()

    let form = document.createElement("form")

    let label1 = document.createElement("label")
    label1.innerHTML = "Primeiro número:"
    let input1 = document.createElement("input")
    label1.append(input1)

    let label2 = document.createElement("label")
    label2.innerHTML = "Segundo número:"
    let input2 = document.createElement("input")
    label2.append(input2)

    let formBtn = document.createElement("button")
    formBtn.classList = "formBtn"
    formBtn.innerHTML = "Comparar"
    formBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let value1 = Number(input1.value)
        let value2 = Number(input2.value)

        if(value1 > value2){
            alert(`O número ${value1} é maior que ${value2}`)
        }else if(value2 > value1){
            alert(`O número ${value2} é maior que ${value1}`)
        }else{
            alert("Os números são iguais")
        }
    })

    form.append(label1, label2, formBtn)
    formTemplate.append(form)
    display.append(formTemplate)
}

const writeNumbers = () => {
    resetResults()
    const display = document.getElementById("display")
    const template = createTemplate()

    let form = document.createElement("form")

    let label = document.createElement("label")
    label.innerHTML = "Insira um número:"

    let input = document.createElement("input")
    input.type = "number"
    input.max = 5
    input.min = 1

    let btn = document.createElement("button")
    btn.innerHTML = "Escrever"
    btn.classList = "formBtn"

    let result = document.createElement("p")


    btn.addEventListener("click", (e) => {
        e.preventDefault()
        

        let value = Number(input.value)
        switch(value){
            case 1:
            result.innerHTML = "Um"
            break;

            case 2:
            result.innerHTML ="Dois"
            break;

            case 3:
            result.innerHTML = "Três"
            break;

            case 4:
            result.innerHTML = "Quatro"
            break;
            
            case 5:
            result.innerHTML = "Cinco"
            break;
        }
    })

    label.append(input)
    form.append(label, btn)
    template.append(form, result)
    display.append(template)
}

const calculateDiscount = () => {
    resetResults()
    let display = document.getElementById("display")
    let template = createTemplate()

    let form = document.createElement("form")

    let label = document.createElement("label")
    label.innerHTML = "Valor do veículo"
    let valueInput = document.createElement("input")
    valueInput.type = "number"
    valueInput.step = "any"

    label.append(valueInput)

    let optionLabel = document.createElement("label")
    optionLabel.innerHTML = "Tipo de combustível"

    let select = document.createElement("select")

    let optionGas = document.createElement("option")
    optionGas.innerHTML = "Gasolina"
    optionGas.value = "gas"

    let optionAlcohol = document.createElement("option")
    optionAlcohol.innerHTML = "Álcool"
    optionAlcohol.value = "alcohol"

    let optionDiesel = document.createElement("option")
    optionDiesel.innerHTML = "Diesel"
    optionDiesel.value = "diesel"

    select.append(optionAlcohol, optionDiesel, optionGas)

    let results = document.createElement("p")

    let btn = document.createElement("button")
    btn.innerHTML = "Calcular"
    btn.classList = "formBtn"
    btn.addEventListener("click", (e) => {

        e.preventDefault()
        results.innerHTML = ""

        switch(select.value){
            case "gas":
            results.innerHTML = Number(valueInput.value) * 0.79
            break;

            case "alcohol":
            results.innerHTML = Number(valueInput.value) * 0.75
            break;

            case "diesel":
            results.innerHTML = Number(valueInput.value) * 0.86
        }
    })

    form.append(label, select, btn)
    template.append(form, results)
    display.append(template)

}

const wageRaise = () => {
    resetResults()
    let template = createTemplate()
    let employees = []

    let minimumWage = Number(prompt("Digite o valor do salário mínimo"))

    const display = document.getElementById("display")

    let output = document.createElement("div")

    let employeeList = document.createElement("div")

    const form = document.createElement("form")

    const nameLabel = document.createElement("label")
    nameLabel.innerHTML = "Nome:"
    const nameInput = document.createElement("input")
    nameLabel.append(nameInput)

    const salaryLabel = document.createElement("label")
    salaryLabel.innerHTML = "Salário:"
    const salaryInput = document.createElement("input")
    salaryInput.type = "number"
    salaryInput.step = "any"
    salaryLabel.append(salaryInput)

    let btn = document.createElement("button")
    btn.classList = "formBtn"
    btn.innerHTML = "Adicionar"
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let name = nameInput.value
        let oldSalary = Number(salaryInput.value)
        
        let newSalary
        if(oldSalary < 3 * minimumWage){
            newSalary = Number(oldSalary * 1.5)
            console.log("caiu no primeiro if")
        }else if( oldSalary >= 3 * minimumWage && oldSalary < 10 *minimumWage){
            newSalary = Number(oldSalary * 1.2)
            console.log("caiu no segundo if")
        }else if( oldSalary >= 10 * minimumWage && oldSalary < 20 *minimumWage){
            newSalary = Number(oldSalary * 1.15)
            console.log("caiu no terceiro if")
        }else{
            newSalary = Number(oldSalary * 1.1)
            console.log("caiu no último if")
        }
        
        let employee = {
            name: name,
            salary: oldSalary,
            adjustedSalary: Number(newSalary)
        }
        
        employees.push(employee)
        let p = document.createElement("p")
        p.innerHTML = `Nome: ${employee.name}/ Salário: R\$ ${employee.salary}/ Reajuste: R\$ ${(employee.adjustedSalary - employee.salary).toFixed(2)}/ Novo salário: R\$ ${employee.adjustedSalary.toFixed(2)}`
        
        employeeList.append(p)
    })

    let calculateBtn = document.createElement("button")
    calculateBtn.innerHTML = "Calcular"
    calculateBtn.classList = "formBtn"
    calculateBtn.addEventListener("click", () => {
        let previousPayroll = 0
        let finalPayroll = 0
        employees.forEach((employee) => {
            previousPayroll = previousPayroll + employee.salary
            finalPayroll = finalPayroll + employee.adjustedSalary
        })
        
        
        let difference = finalPayroll - previousPayroll
        
        let p = document.createElement("p")
        p.innerHTML = `O acrécimo à folha de pagamento é de R$ ${difference.toFixed(2)}`
        output.append(p)
    })

    form.append(nameLabel, salaryLabel, btn)
    template.append(form, employeeList, calculateBtn, output)

    display.append(template)

}



const addEventListeners = () => {
    const btn24 = document.getElementById("24")
    btn24.addEventListener("click", () => {
        positiveOrNegative()
    })

    const btn25 = document.getElementById("25")
    btn25.addEventListener("click", () => {
        numbersAreEqual()
    })

    const btn26 = document.getElementById("26")
    btn26.addEventListener("click", () => {
        writeNumbers()
    })

    const btn27 = document.getElementById("27")
    btn27.addEventListener("click", () => {
        calculateDiscount()
    })

    const btn28 = document.getElementById("28")
    btn28.addEventListener("click", () => {
        wageRaise()
    })
}

addEventListeners()