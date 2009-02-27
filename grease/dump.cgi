#!/usr/local/bin/perl -w
use CGI;          
my $q = new CGI;
print $q->header;             
print $q->start_html;
print $q->Dump();
print $q->end_html;
