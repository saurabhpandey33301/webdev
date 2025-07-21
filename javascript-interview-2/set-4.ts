//your own custom promise....................(without promise chaning)

type TPromiseResolve<T> = (value: T) => void;
type TPromiseReject<T> = (reason: T) => void;

type TPromiseExecutor<T, K> = (
  resolve: TPromiseResolve<T>,
  reject: TPromiseReject<K>
) => void;

type TPromiseThenCallback<T> = (value: T | undefined) => void;
type TPromiseCatchCallback<T> = (reason: T | undefined) => void;
type TPromiseFinallyCallback = () => void;

enum PromiseState {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECETD = 'rejected',
}

class MyPromise<T, K> {
  private _state: PromiseState = PromiseState.PENDING;

  private _successCallbackHandlers: TPromiseThenCallback<T>[] = [];
  private _failureCallbackHandlers: TPromiseCatchCallback<K>[] = [];
  private _finallyCallbackHandler: TPromiseFinallyCallback | undefined =
    undefined;

  private _value: T | undefined = undefined;
  private _reason: K | undefined = undefined;

  constructor(executor: TPromiseExecutor<T, K>) {
    executor(
      this._promiseResolver.bind(this),
      this._promiseRejector.bind(this)
    );
  }

  public then(handlerFn: TPromiseThenCallback<T>) {
    if (this._state === PromiseState.FULFILLED) {
      handlerFn(this._value);
    } else {
      this._successCallbackHandlers.push(handlerFn);
    }
    return this;
  }

  public catch(handlerFn: TPromiseCatchCallback<K>) {
    if (this._state === PromiseState.REJECETD) {
      handlerFn(this._reason);
    } else {
      this._failureCallbackHandlers.push(handlerFn);
    }
    return this;
  }

  public finally(handlerFn: TPromiseFinallyCallback) {
    if (this._state !== PromiseState.PENDING) return handlerFn();
    this._finallyCallbackHandler = handlerFn;
  }

  private _promiseResolver(value: T) {
    if (this._state === PromiseState.FULFILLED) return;
    this._state = PromiseState.FULFILLED;
    this._value = value;
    this._successCallbackHandlers.forEach((cb) => cb(value));
    if (this._finallyCallbackHandler) this._finallyCallbackHandler();
  }

  private _promiseRejector(reason: K) {
    if (this._state === PromiseState.REJECETD) return;
    this._state = PromiseState.REJECETD;
    this._reason = reason;
    this._failureCallbackHandlers.forEach((cb) => cb(reason));
    if (this._finallyCallbackHandler) this._finallyCallbackHandler();
  }
}