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
    form.classList = "outputForm"

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
    form.classList = "outputForm"

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
    form.classList = "outputForm"

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

const showMonthName = () => {
    resetResults()
    let display = document.getElementById("display")
    let template = createTemplate()
    let results = document.createElement("div")

    let form = document.createElement("form")
    form.classList = "outputForm"
    let monthLabel = document.createElement("label")
    monthLabel.innerHTML = "Digite um número de 1 a 12"
    let monthInput = document.createElement("input")
    monthInput.type = "number"
    monthInput.max = 12
    monthInput.min = 1

    let btn = document.createElement("button")
    btn.innerHTML = "Nome do mês"
    btn.classList = "formBtn"
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let p = document.createElement("p")

        switch(monthInput.value){
            case "1":
            p.innerHTML = "Janeiro"
            break;

            case "2":
            p.innerHTML = "Fevereiro"
            break;

            case "3":
            p.innerHTML = "Março"
            break;

            case "4":
            p.innerHTML = "Abril"
            break;

            case "5":
            p.innerHTML = "Maio"
            break;

            case "6":
            p.innerHTML = "Junho"
            break;

            case "7":
            p.innerHTML = "Julho"
            break;

            case "8":
            p.innerHTML = "Agosto"
            break;

            case "9":
            p.innerHTML = "Setembro"
            break;

            case "10":
            p.innerHTML = "Outubro"
            break;

            case "11":
            p.innerHTML = "Novembro"
            break;

            case "12":
            p.innerHTML = "Dezenbro"
            break;

            default:
            p.innerHTML = "Mês inválido!"
        }

        results.append(p)
    })

    monthLabel.append(monthInput)
    form.append(monthLabel, btn)
    template.append(form, results)
    display.append(template)
}

const salaryCalculator = () => {
    resetResults()

    let display = document.getElementById("display")
    let template = createTemplate()
    let results = document.createElement("div")
    
    let form = document.createElement("form")
    form.classList = "outputForm"

    let nameLabel = document.createElement("label")
    nameLabel.innerHTML = "Nome:"
    
    let nameInput = document.createElement("input")
    nameLabel.append(nameInput)

    let ageLabel = document.createElement("label")
    ageLabel.innerHTML = "Digite a idade:"

    let ageInput = document.createElement("input")
    ageInput.type = "number"

    ageLabel.append(ageInput)

    let salaryLabel = document.createElement("label")
    salaryLabel.innerHTML = "Salário:"

    let salaryInput = document.createElement("input")
    salaryInput.type = "number"
    salaryInput.step = "any"

    salaryLabel.append(salaryInput)

    let selectLabel = document.createElement("label")
    selectLabel.innerHTML = "Selecione o gênero:"

    let genderInput = document.createElement("select")

    let optionMale = document.createElement("option")
    optionMale.innerHTML = "Masculino"
    optionMale.value = "M"

    let optionFemale = document.createElement("option")
    optionFemale.innerHTML = "Feminino"
    optionFemale.value = "F"

    genderInput.append(optionFemale, optionMale)
    selectLabel.append(genderInput)

    let btn = document.createElement("button")
    btn.classList = "formBtn"
    btn.innerHTML = "Calcular"
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let p = document.createElement("p")

        let deduction = 0

        if(genderInput.value == "M" && ageInput.value >= 30){
            deduction = 100
        }else if( genderInput.value == "M" && ageInput.value < 30){
            deduction = 50
        }else if(genderInput.value == "F" && ageInput.value >= 30){
            deduction = 200
        }else if(genderInput.value == "F" && ageInput.value < 30){
            deduction = 80
        }
        
        let netSalary = Number(salaryInput.value) - deduction

        p.innerHTML = `O(A) funcionário(a) de nome ${nameInput.value} tem um salário líquido de R$ ${netSalary.toFixed(2)}`
        
        results.append(p)
    })

    form.append(nameLabel, ageLabel, salaryLabel, selectLabel, btn)

    template.append(form, results)

    display.append(template)

}

const sortNumbers = () => {
    resetResults()
    let display = document.getElementById("display")
    let template = createTemplate()

    let numbers = []
    let number1 = Number(prompt("Digite o primeiro número"))
    numbers.push(number1)
    let number2 = Number(prompt("Digite o segundo número"))
    numbers.push(number2)
    let number3 = Number(prompt("Digite o terceiro número"))
    numbers.push(number3)

    let sortedArray = numbers.sort((a,b) => a - b)

    let p = document.createElement("p")
    sortedArray.forEach(number => p.innerHTML += ` ${number}`)
    
    template.append(p)
    display.append(template)

}

const calculator = () => {
    resetResults()
    let display = document.getElementById("display")
    let template = createTemplate()
    let results = document.createElement("div")

    let form = document.createElement("form")
    form.classList = "outputForm"

    let firstNumberLabel = document.createElement("label")
    firstNumberLabel.innerHTML = "Primeiro número:"

    let firstNumberInput = document.createElement("input")
    firstNumberInput.type = "number"
    firstNumberInput.step = "any"

    firstNumberLabel.append(firstNumberInput)

    let secondNumberLabel = document.createElement("label")
    secondNumberLabel.innerHTML = "Segundo número:"

    let secondNumberInput = document.createElement("input")
    secondNumberInput.type = "number"
    secondNumberInput.step = "any"

    secondNumberLabel.append(secondNumberInput)

    let operatorLabel = document.createElement("label")
    operatorLabel.innerHTML = "Operador"

    let operatorInput = document.createElement("input")

    operatorLabel.append(operatorInput)

    let btn = document.createElement("button")
    btn.innerHTML = "Calcular"
    btn.classList = "formBtn"
    btn.addEventListener("click", (e) => {

        e.preventDefault()

        let number1 = Number(firstNumberInput.value)
        let number2 = Number(secondNumberInput.value)
        let result
        let p = document.createElement("p")

        switch(operatorInput.value){
            case "+":
            result = number1 + number2
            p.innerHTML = `Resultado: ${result}`
            break;

            case "-":
            result = number1 - number2
            p.innerHTML = `Resultado: ${result}`
            break;

            case "*":
            result = number1 * number2
            p.innerHTML = `Resultado: ${result}`
            break;

            case "/":
            result = number1 / number2
            p.innerHTML = result
            break;

            default:
            p.innerHTML = "Operador inválido inserido"
            
        }

        results.append(p)
    })

    form.append(firstNumberLabel, secondNumberLabel, operatorLabel, btn)
    template.append(form, results)
    display.append(template)
}

const triangles = () => {
    resetResults()
    let display = document.getElementById("display")
    let template = createTemplate()

    let results = document.createElement("div")

    let form = document.createElement("form")
    form.classList = "outputForm"

    let firstSideLabel = document.createElement("label")
    firstSideLabel.innerHTML = "Lado A:"

    let firstSideInput = document.createElement("input")
    firstSideInput.type = "number"
    firstSideInput.step = "any"

    firstSideLabel.append(firstSideInput)

    let secondSideLabel = document.createElement("label")
    secondSideLabel.innerHTML = "Lado B:"

    let secondSideInput = document.createElement("input")
    secondSideInput.type = "number"
    secondSideInput.step = "any"

    secondSideLabel.append(secondSideInput)

    let thirdSideLabel = document.createElement("label")
    thirdSideLabel.innerHTML = "Lado C:"

    let thirdSideInput = document.createElement("input")
    thirdSideInput.type = "number"
    thirdSideInput.step = "any"

    thirdSideLabel.append(thirdSideInput)

    let btn = document.createElement("button")
    btn.classList = "formBtn"
    btn.innerHTML = "Calcular"
    btn.addEventListener("click", (event) => {

        event.preventDefault()

        let firstSideValue = Number(firstSideInput.value)
        let secondSideValue = Number(secondSideInput.value)
        let thirdSideValue = Number(thirdSideInput.value)

        if(firstSideValue <= 0 || secondSideValue <= 0 || thirdSideValue <= 0){
            results.innerHTML = "Valor inválido detectado"
        }else if(firstSideValue > secondSideValue + thirdSideValue || secondSideValue > firstSideValue + thirdSideValue || thirdSideValue > firstSideValue + secondSideValue){
            results.innerHTML = "Valores fornecidos violam regra da desigualdade triângular"
        }else if(firstSideValue == secondSideValue && secondSideValue == thirdSideValue){
            results.innerHTML = "Valores fornecidos formam um triângulo equilatero"
        }else if(firstSideValue == secondSideValue || firstSideValue == thirdSideValue || secondSideValue == thirdSideValue){
            results.innerHTML = "Valores fornecidos formam um triângulo isósceles"
        }else if(firstSideValue != secondSideValue && firstSideValue != thirdSideValue && secondSideValue != thirdSideValue){
            results.innerHTML = "Valores fornecidos formam um triângulo escaleno"
        }
    })

    form.append(firstSideLabel, secondSideLabel, thirdSideLabel, btn)

    template.append(form, results)

    display.append(template)
}

const teacherEarnings = () => {
    resetResults()
    const display = document.getElementById("display")

    const template = createTemplate()

    let results = document.createElement("div")

    let form = document.createElement("form")
    form.classList = "outputForm"
    
    let hoursPerMonthLabel = document.createElement("label")
    hoursPerMonthLabel.innerHTML = "horas/mês"

    let hoursPerMonthInput = document.createElement("input")
    hoursPerMonthInput.type = "number"
    hoursPerMonthInput.min = 0

    hoursPerMonthLabel.append(hoursPerMonthInput)

    let teacherLevelLabel = document.createElement("label")
    teacherLevelLabel.innerHTML = "Nível:"

    let teacherLevel = document.createElement("select")

    let level1 = document.createElement("option")
    level1.value = 12
    level1.innerHTML = "Nível 1"

    let level2 = document.createElement("option")
    level2.value = 17
    level2.innerHTML = "Nível 2"

    let level3 = document.createElement("option")
    level3.value = 25
    level3.innerHTML = "Nível 3"

    teacherLevel.append(level1, level2, level3)

    teacherLevelLabel.append(teacherLevel)

    let btn = document.createElement("button")
    btn.innerHTML = "Calcular"
    btn.classList = "formBtn"
    btn.addEventListener("click", (e) => {

        e.preventDefault()
        
        let teacherRate = teacherLevel.value
        let monthlySalary = Number(hoursPerMonthInput.value) * teacherRate

        results.innerHTML = `Salário mensal: R$ ${monthlySalary.toFixed(2)}`
    })

    form.append(hoursPerMonthLabel, teacherLevelLabel, btn)

    template.append(form, results)

    display.append(template)

}

const swimCategory = () => {
    resetResults()

    let display = document.getElementById("display")

    let template = createTemplate()

    let results = document.createElement("div")

    let form = document.createElement("form")
    form.classList = "outputForm"

    let ageLabel = document.createElement("label")
    ageLabel.innerHTML = "Idade:"

    let ageInput = document.createElement("input")
    ageInput.type = "number"
    ageInput.min = 0

    ageLabel.append(ageInput)

    let btn = document.createElement("button")
    btn.classList = "formBtn"
    btn.innerHTML = "Categoria"
    btn.addEventListener("click", (e) => {
        e.preventDefault()

        let age = Number(ageInput.value)
        if(age < 5){
            results.innerHTML = "Idade mínima não atingida"
        }else if(age >=5 && age <=7){
            results.innerHTML = "Categoria Infantil A"
        }else if(age > 7 && age <= 10){
            results.innerHTML = "Categoria Infantil B"
        }else if(age > 10 && age <= 13){
            results.innerHTML = "Categoria Juvenil A"
        }else if(age > 13 && age <= 17){
            results.innerHTML ="Categoria Juvenil B"
        }else{
            results.innerHTML = "Categoria Sênior"
        }
    })

    form.append(ageLabel, btn)

    template.append(form, results)

    display.append(template)
}

const energyBill = () => {
    resetResults()

    let template = createTemplate()

    let display = document.getElementById("display")

    let results = document.createElement("div")

    let form = document.createElement("form")
    form.classList = "outputForm"

    let energyLabel = document.createElement("label")
    energyLabel.innerHTML = "Consumo no mês:"

    let energyInput = document.createElement("input")
    energyInput.type = "number"
    energyInput.step = "any"
    energyInput.min = 0

    energyLabel.append(energyInput)

    let clientTypeLabel = document.createElement("label")
    clientTypeLabel.innerHTML = "Tipo de consumo:"

    let clientType = document.createElement("select")

    let optionResidence = document.createElement("option")
    optionResidence.innerHTML = "Residência"
    optionResidence.value = 0.6

    let optionComercial = document.createElement("option")
    optionComercial.innerHTML = "Comercial"
    optionResidence.value = 0.48

    let optionIndustrial = document.createElement("option")
    optionIndustrial.innerHTML = "Industrial"
    optionIndustrial.value = 1.29

    clientType.append(optionResidence, optionComercial, optionIndustrial)

    clientTypeLabel.append(clientType)

    let btn = document.createElement("button")
    btn.innerHTML = "Calcular"
    btn.classList = "formBtn"
    btn.addEventListener("click" , (e) => {
        e.preventDefault()

        let finalValue = Number(energyInput.value) * Number(clientType.value)
        console.log(finalValue)
        results.innerHTML = `Valor final: R$ ${finalValue.toFixed(2)}`
    })

    form.append(energyLabel, clientTypeLabel, btn)

    template.append(form, results)

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

    const btn29 = document.getElementById("29")
    btn29.addEventListener("click", () => {
        showMonthName()
    })

    const btn30 = document.getElementById("30")
    btn30.addEventListener("click", () => {
        salaryCalculator()
    })

    const btn31 = document.getElementById("31")
    btn31.addEventListener("click", () => {
        sortNumbers()
    })

    const btn32 = document.getElementById("32")
    btn32.addEventListener("click", () => {
        calculator()
    })

    const btn33 = document.getElementById("33")
    btn33.addEventListener("click", () => {
        triangles()
    })

    const btn34 = document.getElementById("34")
    btn34.addEventListener("click", () => {
        teacherEarnings()
    })

    const btn35 = document.getElementById("35")
    btn35.addEventListener("click", () => {
        swimCategory()
    })

    const btn36 = document.getElementById("36")
    btn36.addEventListener("click", () => {
        energyBill()
    })
}

addEventListeners()
