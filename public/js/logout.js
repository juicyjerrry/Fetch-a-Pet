function simpleDeleteCookie(name) {  // This is the "no library" method - just plan Javascript
    document.cookie = name + '=undefined; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    alert('You have been logged out successfully')
}

const logout = async () => {
    //is this pointing to the correct logout route?
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
    simpleDeleteCookie();
};

document.querySelector('#logout').addEventListener('click', logout);
