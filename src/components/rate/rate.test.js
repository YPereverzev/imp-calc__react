

describe('Rate', () => {
    it('Feedbacks.rating 3, 4 and 5  should be 4', () => {
        expect(rateCalc({

            activeExporter:{experience: [{rating: 3}, {rating: 4}, {rating: 5}]
        }}
        )).toBe(4);
    })
})  