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
 * The SpecialModelName model module.
 * @module model/SpecialModelName
 * @version 1.0.0
 */
class SpecialModelName {
    /**
     * Constructs a new <code>SpecialModelName</code>.
     * @alias module:model/SpecialModelName
     */
    constructor() { 
        
        SpecialModelName.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
        
    }

    /**
     * Constructs a <code>SpecialModelName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpecialModelName} obj Optional instance to populate.
     * @return {module:model/SpecialModelName} The populated <code>SpecialModelName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SpecialModelName();

            if (data.hasOwnProperty('$special[property.name]')) {
                obj['$special[property.name]'] = ApiClient.convertToType(data['$special[property.name]'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} $special[property.name]
 */
SpecialModelName.prototype['$special[property.name]'] = undefined;






export default SpecialModelName;

