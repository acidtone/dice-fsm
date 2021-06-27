# Finite State Machine - First attempt
## Dice - King of New York
Simplified states that only deal with the dice and counters:
1. Roll Dice
    1. Roll 6 dice
    2. Keep 0-6 OR Resolve
    3. Roll leftovers
    4. Keep 0-x dice OR Resolve
    5. Roll leftovers
2. Resolve Dice
    - Reduce die totals and increment counters
        - Hearts -> Health counter
        - Stars -> VP counter
        - Energy -> Money counter
3. Done (multiple players come later)