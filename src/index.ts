import { ClassFromPackage2 } from "typings-package2-issue"
import { MyInterface } from "typings-package1-issue"

class MyOtherClass implements MyInterface {
    doSomething():string {
        return "hello from the package wrapper!"
    }
} 

new ClassFromPackage2().doSomething()
new MyOtherClass().doSomething()
