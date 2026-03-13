/**
 * Wait for condition
 *
 * @param {() => boolean} condition - the specified condition
 * @param {number | 500} interval - the specified time interval
 * @param {number | 1000} timeout - the specified time out
 *
 */
export async function waitFor(condition, interval = 500, timeout = 1000) {
  let t = 0;
  do {
    await delay(interval);
    t += interval;
  } while (!condition() && t < timeout);
}

/**
 * Find the HTML element by the specified id and get function
 *
 * @param {string} id - the specified id
 * @param {string} functionName - the function name
 * @returns {Function} return the function
 */
function getFunction(id, functionName) {
  if (!id) return;
  let func;
  document.getElementsByName(id).forEach((e) => {
    if (e?.customData && e.customData[functionName]) {
      func = e.customData[functionName];
    }
  });

  return func;
}

/**
 * Wait and find the HTML element by the specified id and execute function
 *
 * @param {string} id - the specified id
 * @param {number} interval - the specified interval to check the HTML element exist
 * @param {number} timeout - the specified timeout to break
 * @param {string} functionName - the function name
 * @param {Array<Object>} functionParams - the function params
 * @returns {Object} return the result of this function
 */
export async function waitAndExecuteFunction(id, interval, timeout, functionName, functionParams) {
  await waitFor(() => getFunction(id, functionName), interval, timeout);
  return executeFunction(id, functionName, functionParams);
}

/**
 * Find the HTML element by the specified id and execute function
 *
 * @param {string} id - the specified id
 * @param {string} functionName - the function name
 * @param {Array<Object>} functionParams - the function params
 * @returns {Object | Promise<Object>} return the result of this function
 */
export function executeFunction(id, functionName, functionParams) {
  const func = getFunction(id, functionName);
  if (func) {
    return functionParams && functionParams.length > 0 ? func(...functionParams) : func();
  }
}