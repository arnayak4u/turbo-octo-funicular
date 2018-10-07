export const outcomeCategoryConstants = {
    runCounter:'runCounter',
    wicketCounter:'wicketCounter',
    faultyDeliveries:'faultyDeliveries'
}

export const outcomeIdConstants = {
    [outcomeCategoryConstants.runCounter]:{
        id:{
            DotBall:'DotBall',
            SixRuns:'SixRuns',
            FourRuns:'FourRuns',
            ThreeRuns:'ThreeRuns',
            TwoRuns:'TwoRuns',
            OneRun:'OneRun'
        }
    },
    [outcomeCategoryConstants.wicketCounter]:{
        id:{
            HitWicket:'HitWicket',
            Bowled:'Bowled',
            RunOut:'RunOut',
            Caught:'Caught',
            LBW:'LBW',
            CaughtNBowled:'CaughtNBowled'
        }
    },
    [outcomeCategoryConstants.faultyDeliveries]:{
        id:{
            NoBall:'NoBall',
            Wide:'Wide',
            Byes:'Byes',
            DeadBall:'DeadBall'
        }
    },    
}