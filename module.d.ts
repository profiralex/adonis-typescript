//module exports
declare module '@adonisjs/ignitor' {
    import { Ignitor } from "adonis";
    const hooks: { before: Ignitor.Hooks, after: Ignitor.Hooks };
    const Ignitor: Ignitor;
    const Helpers: Ignitor.Helpers;
    export { hooks, Ignitor, Helpers };
}

declare module '@adonisjs/fold' {
    import { Fold } from "adonis"
    const ioc : Fold.Ioc;
    const ServiceProvider : Fold.ServiceProvider;
    const registrar : Fold.Registrar;
    const resolver : Fold.Resolver;

    export { ioc, ServiceProvider, registrar, resolver }
}

declare namespace NE {
    /**
     * node-exceptions
     *
     * (c) Harminder Virk <virk@adonisjs.com>
     *
     * For the full copyright and license information, please view the LICENSE
     * file that was distributed with this source code.
    */

    /**
     * LogicalException is a netural class extend
     * the Error object.
     *
     * @class LogicalException
     */
    interface LogicalException extends Error {
        new(message: string, status?: number, code?: number, errShLink?: string): LogicalException; 
    }

    interface DomainException extends LogicalException { }
    interface InvalidArgumentException extends LogicalException { }
    interface RangeException extends LogicalException { }
    interface RuntimeException extends LogicalException { }
    interface HttpException extends LogicalException { }
}

declare module '@adonisjs/generic-exceptions' {
    interface InvalidArgumentException extends NE.InvalidArgumentException {
        /**
         * Throw an exception when there is a missing parameter
         *
         * @method missingParameter
         * @static
         *
         * @param  {String}         method
         * @param  {String}         parameterName
         * @param  {String|Number}  position
         *
         * @return {InvalidArgumentException}
         */
        missingParameter(method : string, parameterName : string, position : string | number): InvalidArgumentException;
            
        /**
         * Throw exception when the parameter received is invalid
         *
         * @method invalidParameter
         * @static
         *
         * @param  {String}         errorMessage
         * @param  {Mixed}          originalValue
         *
         * @return {InvalidArgumentException}
         */
        invalidParameter(errorMessage : string, originalValue : any): InvalidArgumentException;
            
        /**
         * Invoke instance of this class with a custom message
         * status and error code
         *
         * @method invoke
         *
         * @param  {String} message
         * @param  {Number} [status = 500]
         * @param  {String} [code = E_INVALID_ARGUMENT]
         *
         * @return {InvalidArgumentException}
         */
        invoke(message : string, status? : number, code? : string): InvalidArgumentException;
    }

    /**
     * Runtime exception is thrown when some unexpected behavior
     * is detected at rutime.
     *
     * @class RuntimeException
     */
    interface RuntimeException extends NE.RuntimeException {
        /**
         * Missing config exception is thrown when configuration
         * is not defined for a given key
         *
         * @method missingConfig
         *
         * @param  {String}      key
         * @param  {String}      configLocation
         *
         * @return {RuntimeException}
         */
        missingConfig(key : string, configLocation : string): RuntimeException;
            
        /**
         * This exception is raised when appKey is missing
         * inside the config file but required to make
         * some operation
         *
         * @method missingAppKey
         *
         * @param  {String}      provider - Name of the provider who want to use the app key
         *
         * @return {RuntimeException}
         */
        missingAppKey(provider : string): RuntimeException;
            
        /**
         * This exception is raised when environment variable
         * is not defined, but is required for app operation.
         *
         * @method missingEnvKey
         *
         * @param  {String}      environment variable name (e.g. `HOME` or `PATH`)
         *
         * @return {RuntimeException}
         */
        missingEnvKey(key : String): RuntimeException;
            
        /**
         * This exception is raised when configuration is not
         * complete for a given config file or key
         *
         * @method incompleteConfig
         *
         * @param  {Array}          missingKeys
         * @param  {String}         file
         * @param  {String}         forKey
         *
         * @return {RuntimeException}
         */
        incompleteConfig(missingKeys: Array<string>, file: string, forKey: string): RuntimeException;
            
        /**
         * Invoke instance of this class with a custom message
         * status and error code
         *
         * @method invoke
         *
         * @param  {String} message
         * @param  {Number} [status = 500]
         * @param  {String} [code = E_RUNTIME_ERROR]
         *
         * @return {RuntimeException}
         */
        invoke(message : string, status? : number, code? : string): RuntimeException;
    }

    const LogicalException: NE.LogicalException
    const HttpException: NE.HttpException;
    const InvalidArgumentException: InvalidArgumentException;
    const RuntimeException: RuntimeException;

    export { LogicalException, HttpException, InvalidArgumentException, RuntimeException };
}