const mongoose = require('mongoose');

const Awards = mongoose.Schema({
  AwardWon: Boolean,
  AwardYear: Number,
  Participants: [String],
  Award: String,
  AwardCompany: String
});

const OtherNames = mongoose.Schema({
  TitleNameLanguage: String,
  TitleNameType: String,
  TitleNameSortable: String,
  TitleName: String
});

const Participants = mongoose.Schema({
  IsKey: Boolean,
  RoleType: String,
  IsOnScreen: Boolean,
  ParticipantType: String,
  Name: String,
  ParticipantID: Number
});

const Storylines = mongoose.Schema({
  Description: String,
  Language: String,
  Type: String
});

const TitlesSchema = mongoose.Schema({
  Awards: [Awards],
  Genres: [String],
  OtherNames: [OtherNames],
  Participants: [Participants],
  ReleaseYear: Number,
  Storylines: [Storylines],
  TitleId: Number,
  TitleName: String,
  TitleNameSortable: String,
  _id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Titles', TitlesSchema, 'Titles');
