<template>
  <div id="app">
    <div class="wrapper clearfix">
      <Players
      v-bind:isWinner="isWinner"
        v-bind:activePlayer="activePlayer"
        v-bind:scoresPlayer="scoresPlayer"
        v-bind:currentScore="currentScore"
      />
      <Controls
        v-bind:isPlaying="isPlaying"
        v-bind:finalScore="finalScore"
        v-on:handleChangeFinalScore="handleChangeFinalScore"
        v-on:handleRollDice="handleRollDice"
        v-on:handleNewGame="handleNewGame"
        v-on:handleHoldScore="handleHoldScore"
      />
      <Dices v-bind:dices="dices" />
    </div>
  </div>
</template>

<script>
import Players from "./components/Players";
import Controls from "./components/Controls";
import Dices from "./components/Dices";

export default {
  name: "app",
  data() {
    return {
      isPlaying: false,
      activePlayer: 0,
      scoresPlayer: [0, 0],
      currentScore: 0,
      dices: [1, 1],
      finalScore: 10
    };
  },
  computed: {
    isWinner() {
      let { scoresPlayer, finalScore } = this;
      if (scoresPlayer[0] >= finalScore || scoresPlayer[1] >= finalScore) {
        this.isPlaying = false;
        return true;
      }
      return false;
    }
  },
  methods: {
    nextPlayer() {
      this.activePlayer = this.activePlayer === 0 ? 1 : 0;
      this.currentScore = 0;
    },
    handleRollDice() {
      if (this.isPlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        this.dices = [dice1, dice2];
        if (dice1 === 1 || dice2 === 1) {
          setTimeout(() => {
            alert(`Bạn đã quay trúng số 1!`);
          }, 10);
          this.nextPlayer();
        } else {
          this.currentScore += dice1 + dice2;
        }
      } else {
        alert("Vui lòng nhấn New Game");
      }
    },
    handleNewGame() {
      (this.isPlaying = true),
        (this.activePlayer = 0),
        (this.scoresPlayer = [0, 0]),
        (this.currentScore = 0),
        (this.dices = [0, 0]);
    },
    handleHoldScore() {
      if (this.isPlaying) {
        let { scoresPlayer, activePlayer, currentScore } = this;
        let scoreOld = scoresPlayer[activePlayer];
        let cloneScoresPlayer = [...scoresPlayer];
        cloneScoresPlayer[activePlayer] = scoreOld + currentScore;
        this.scoresPlayer = cloneScoresPlayer;
        if (!this.isWinner) {
          this.nextPlayer();
        }
      } else {
        alert("Vui lòng nhấn New Game");
      }
    },
    handleChangeFinalScore(e) {
      var number = parseInt(e.target.value);
      if (isNaN(number)) {
        this.finalScore = "";
      } else {
        this.finalScore = number;
      }
    }
  },
  components: {
    Players,
    Controls,
    Dices
  }
};
</script>

<style>
/**********************************************
*** GENERAL
**********************************************/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url("/dist/assets/back.jpg");
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
</style>
