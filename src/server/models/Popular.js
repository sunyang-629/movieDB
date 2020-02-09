class Popular{
    constructor(rawData) {
        this.vote = rawData.vote_average
        this.title = rawData.title;
        this.id = rawData.id;
        this.poster_path = 'https://image.tmdb.org/t/p/w500/' + rawData.poster_path;
        this.release_year = rawData.release_date.slice(0, 4);
        this.release_month = this.calculateMonth(rawData.release_date.slice(5, 7));
    }

    calculateMonth(month) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return months[parseInt(month) - 1]
    }
}

module.exports = Popular;

