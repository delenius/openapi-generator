/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ArrayOfArrayOfNumberOnly model module.
 * @module model/ArrayOfArrayOfNumberOnly
 * @version 1.0.0
 */
class ArrayOfArrayOfNumberOnly {
    /**
     * Constructs a new <code>ArrayOfArrayOfNumberOnly</code>.
     * @alias module:model/ArrayOfArrayOfNumberOnly
     */
    constructor() { 
        
        ArrayOfArrayOfNumberOnly.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
        
    }

    /**
     * Constructs a <code>ArrayOfArrayOfNumberOnly</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArrayOfArrayOfNumberOnly} obj Optional instance to populate.
     * @return {module:model/ArrayOfArrayOfNumberOnly} The populated <code>ArrayOfArrayOfNumberOnly</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArrayOfArrayOfNumberOnly();

            if (data.hasOwnProperty('ArrayArrayNumber')) {
                obj['ArrayArrayNumber'] = ApiClient.convertToType(data['ArrayArrayNumber'], [['Number']]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Array.<Number>>} ArrayArrayNumber
 */
ArrayOfArrayOfNumberOnly.prototype['ArrayArrayNumber'] = undefined;






export default ArrayOfArrayOfNumberOnly;

