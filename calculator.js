class Calculator {
    constructor() {
        this.currentInput = '0';
        this.previousInput = null;
        this.operator = null;
        this.waitingForNewNumber = false;
        
        this.display = document.getElementById('display');
        this.bindButtons();
    }

    bindButtons() {
        document.querySelectorAll('[data-digit]').forEach(btn => {
            btn.addEventListener('click', () => this.appendDigit(btn.dataset.digit));
        });

        document.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', () => this.handleAction(btn.dataset.action));
        });

        document.querySelectorAll('[data-operator]').forEach(btn => {
            btn.addEventListener('click', () => this.setOperator(btn.dataset.operator));
        });
    }

    appendDigit(digit) {
        if (this.waitingForNewNumber) {
            this.currentInput = digit;
            this.waitingForNewNumber = false;
        } else {
            this.currentInput = this.currentInput === '0' ? digit : this.currentInput + digit;
            
            // Limit length to prevent overflow
            if (this.currentInput.length > 9) {
                this.currentInput = this.currentInput.slice(-9);
            }
        }
        this.updateDisplay();
    }

    handleAction(action) {
        switch (action) {
            case 'ac':
                this.clearAll();
                break;
            case 'delete':
                this.deleteDigit();
                break;
            case 'plus-minus':
                this.toggleSign();
                break;
            case 'percent':
                this.calculatePercent();
                break;
            case 'decimal':
                this.appendDecimal();
                break;
            case 'equals':
                this.calculate();
                break;
        }
    }

    clearAll() {
        this.currentInput = '0';
        this.previousInput = null;
        this.operator = null;
        this.waitingForNewNumber = false;
        this.updateDisplay();
    }

    deleteDigit() {
        if (this.waitingForNewNumber) return;
        this.currentInput = this.currentInput.length > 1 
            ? this.currentInput.slice(0, -1) 
            : '0';
        this.updateDisplay();
    }

    toggleSign() {
        const value = parseFloat(this.currentInput);
        if (value === 0) return;
        this.currentInput = String(value * -1);
        this.updateDisplay();
    }

    appendDecimal() {
        if (this.waitingForNewNumber) return;
        
        // Check if decimal already exists in current input
        if (this.currentInput.includes('.')) return;
        
        // If we have an operator pending, start fresh with "0."
        if (this.operator && this.previousInput !== null) {
            this.currentInput = '0.';
            this.waitingForNewNumber = true;
        } else {
            this.currentInput += '.';
        }
        this.updateDisplay();
    }

    setOperator(op) {
        if (this.operator && !this.waitingForNewNumber) {
            this.calculate();
        }
        
        this.previousInput = parseFloat(this.currentInput);
        this.operator = op;
        this.waitingForNewNumber = true;
        
        // Highlight the operator button
        document.querySelectorAll('[data-operator]').forEach(btn => {
            btn.classList.remove('orange');
        });
        const activeBtn = document.querySelector(`[data-operator="${op}"]`);
        if (activeBtn) activeBtn.classList.add('orange');
    }

    calculate() {
        if (!this.operator || this.previousInput === null) return;
        
        const current = parseFloat(this.currentInput);
        let result;

        switch (this.operator) {
            case '+':
                result = this.previousInput + current;
                break;
            case '-':
                result = this.previousInput - current;
                break;
            case '*':
                result = this.previousInput * current;
                break;
            case '/':
                result = current === 0 ? 'NaN' : this.previousInput / current;
                break;
        }

        // Fix floating point precision issues (e.g., 0.1 + 0.2)
        if (result !== 'NaN') {
            result = parseFloat(result.toFixed(8));
        }

        this.currentInput = String(result);
        this.previousInput = null;
        this.operator = null;
        this.waitingForNewNumber = true;
        
        // Clear operator highlighting
        document.querySelectorAll('[data-operator]').forEach(btn => {
            btn.classList.remove('orange');
        });

        this.updateDisplay();
    }

    calculatePercent() {
        const value = parseFloat(this.currentInput);
        if (isNaN(value)) return;
        this.currentInput = String(value / 100);
        this.updateDisplay();
    }

    updateDisplay() {
        // Dynamic font sizing based on length
        let fontSize = '52px';
        const len = this.currentInput.length;
        
        if (len > 9) fontSize = '36px';
        else if (len > 7) fontSize = '40px';
        else if (len > 5) fontSize = '48px';

        this.display.textContent = this.currentInput;
        this.display.style.fontSize = fontSize;
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.calc = new Calculator();
});
