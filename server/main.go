package main

import (
	"context"
	"errors"
	"log"
	"net"

	pb "github.com/tom751/hr/pb"
	"google.golang.org/grpc"
)

const (
	port = ":5000"
)

type HrServer struct {
	pb.UnimplementedHrServer
}

func (s *HrServer) Login(ctx context.Context, in *pb.LoginDetails) (*pb.User, error) {
	log.Printf("Received: %v", in.GetEmail())

	if in.GetEmail() != "a@a.com" {
		return nil, errors.New("invalid email or password")
	}

	if in.GetPassword() != "password" {
		return nil, errors.New("invalid email or password")
	}

	return &pb.User{FirstName: "Bob", LastName: "Smith", Email: in.GetEmail(), JobTitle: "Software engineer", Id: "ABC123"}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	s := grpc.NewServer()

	pb.RegisterHrServer(s, &HrServer{})
	log.Printf("Server listening at %v", lis.Addr())

	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
