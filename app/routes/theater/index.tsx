import { Button, Box, VStack, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function TheaterRoom() {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const handleSeatClick = (seatNumber: number) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={6}>
      <VStack textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">
          Movie Theater Room
        </Text>

        <VStack>
          {rows.map((rowLabel, rowIndex) => {
            const seatsInRow = 20 - rowIndex; // Decreasing number of seats per row

            // Calculate the number of seats for the left and right sides
            const sideSeats = 2; // Number of side seats (first and last group of seats)
            const middleSeats = seatsInRow - sideSeats * 2; // Seats in the middle

            return (
              <HStack key={rowIndex} justify="center" spacing={2}>
                {/* Left Side Seats */}
                {Array.from({ length: sideSeats }).map((_, sideIndex) => (
                  <Button
                    key={`${rowLabel}-L${sideIndex + 1}`}
                    size="sm"
                    width="40px"
                    height="40px"
                    colorScheme={selectedSeats.includes(sideIndex + 1) ? "orange" : "green"}
                    onClick={() => handleSeatClick(sideIndex + 1)}
                  >
                    {rowLabel}
                    L{sideIndex + 1}
                  </Button>
                ))}

                {/* Middle Corridor */}
                <Box width="40px" />

                {/* Center Seats */}
                {Array.from({ length: middleSeats }).map((_, seatIndex) => {
                  const seatNumber = rowIndex * seatsInRow + seatIndex + 1;
                  return (
                    <Button
                      key={seatNumber}
                      size="sm"
                      width="40px"
                      height="40px"
                      colorScheme={selectedSeats.includes(seatNumber) ? "orange" : "green"}
                      onClick={() => handleSeatClick(seatNumber)}
                    >
                      {rowLabel}
                      {seatIndex + 1}
                    </Button>
                  );
                })}

                {/* Middle Corridor */}
                <Box width="40px" />

                {/* Right Side Seats */}
                {Array.from({ length: sideSeats }).map((_, sideIndex) => (
                  <Button
                    key={`${rowLabel}-R${sideIndex + 1}`}
                    size="sm"
                    width="40px"
                    height="40px"
                    colorScheme={selectedSeats.includes(sideIndex + 1) ? "orange" : "green"}
                    onClick={() => handleSeatClick(sideIndex + 1)}
                  >
                    {rowLabel}
                    R{sideIndex + 1}
                  </Button>
                ))}
              </HStack>
            );
          })}
        </VStack>
        <Box className="screen" bg="gray.300" w="70%" p={4} borderRadius="md">
          Screen
        </Box>
      </VStack>
    </Box>
  );
}
