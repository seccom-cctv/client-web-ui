
MANAGEMENT_API_URL = 'http://0.0.0.0:3000'


/**
 * Fetch the notifications preferences of the user
 * @param {*} user_id 
 * @returns {Array}
 */
export const get_notidications_preferences = async (user_id) => {

    const options = {
        method: 'GET',
    };

    let url = `${MANAGEMENT_API_URL}/preferences/${user_id}` // Dps isto deverá mudar de acordo como será o endpoint
    let ret;

    fetch(url)
        .then((response) => ret = response.json());

    return ret
}