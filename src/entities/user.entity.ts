import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  firstName: string;

  @Column({ type: 'varchar', length: 100 })
  lastName: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  profilePictureUrl: string;

  @Column({ type: 'varchar', nullable: true })
  headline: string; // e.g., "Software Engineer at XYZ"

  @Column({ type: 'text', nullable: true })
  about: string; // A short bio or description

  @Column({ type: 'varchar', nullable: true })
  location: string; // e.g., "Riyadh, Saudi Arabia"

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;

  @Column({ type: 'varchar', nullable: true })
  phoneNumber: string;

  @Column({ type: 'text', array: true, default: () => 'array[]::text[]' })
  skills: string[]; // Array of skill names

  @Column({ type: 'varchar', nullable: true })
  currentCompany: string;

  @Column({ type: 'varchar', nullable: true })
  currentPosition: string;

  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
