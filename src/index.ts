import { MyInterface } from "typings-package2-issue"
import { SomethingElse } from "typings-package2-issue"
import { MyInterface } from "typings-package1-issue"

class AnotherOne implements MyInterface {
    doSomething():string {
        return "ok"
    }
} 

new AnotherOne().doSomething()
new SomethingElse().doSomething()