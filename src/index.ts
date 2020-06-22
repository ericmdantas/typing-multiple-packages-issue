import { ClassFromPackage2 } from "typings-package2-issue"
import { MyInterface, ClassFromPackage1 } from "typings-package1-issue"

class MyOtherClass implements MyInterface {
    name: "packages wrapper";
    doSomething():string {
        return `hello from the ${this.name}!`
    }
} 

new ClassFromPackage1().doSomething()
new ClassFromPackage2().doSomething()
new MyOtherClass().doSomething()
