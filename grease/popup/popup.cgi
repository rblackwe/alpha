#!/usr/local/bin/perl -w
use CGI;          
use Net::Nslookup;
use Net::Whois;
my $q = new CGI;

print $q->header('text/plain');
print is_Pair_hosted( $q->param('x') );

sub is_Pair_hosted {
        my $domain_name = shift; 
        return "yes" if whois_it( get_ip ( $domain_name ) )  =~ /pair Networks/; 
        return "no";
} 
sub whois_it {
         my $dom = shift;
         return `whois $dom`;
}

sub get_ip {
	my $domain = shift;
        my $a  = nslookup(host => "$domain", type => "A");
        return $a;
}
         
