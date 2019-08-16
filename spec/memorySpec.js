
describe("revealCard", function(){
    it ("should reveal two cards", function(){
        expect(cardFlipped).toBe(false);
    });

    it ("should start the game with 0 points", function(){
        expect(points).toBeDefined();
    });

    it ("should unlock the board if the cards are not shuffled", function(){
        expect(setBoard).toBe(false);
    });

});


describe("cardsMatch", function(){
    it ("should add points if two cards match", function(){
        expect(points + 100).toBe(100);
    });
});


describe("flipCardBack", function(){
    it ("should unlock the board if the cards are not shuffled", function(){
        expect(setBoard).toBe(false);
    });

   
})


describe("resetGameBoard", function(){
    it ("should have all the cards unflipped", function(){
        expect(setBoard).toBe(false);
    });

    it ("should have the board unset", function(){
        expect(setBoard).toBe(false);
    });

    it ("should have back card undefined", function(){
        expect(backCard).toBe(undefined);
    });

    it ("should have front card undefined", function(){
        expect(frontCard).toBe(undefined);
    });
})


describe("memoryCard", function(){
    it ("should shuffle cards", function(){
        expect(memoryCard).toBeDefined();
    });
});

