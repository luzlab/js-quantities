import Qty from "./constructor.js";
import EJSON from "ejson";
import { assign } from "./utils.js";

const ejson_type = 'js-quantity'
if (typeof EJSON !== 'undefined') {
    EJSON.addType(ejson_type, Qty);
    assign(Qty.prototype, {
        typeName() {
            return ejson_type
        },

        toJSONValue() {
            let object_definition = {
                scalar: this.scalar,
                numerator: this.numerator,
                denominator: this.denominator
            };
            return object_definition;
        },

        clone() {
            return new Qty(this);
        },

        equals(other) {
            if (this.isCompatible(other)) {
                return this.eq(other);
            } else {
                return false;
            }
        }
    });
}
